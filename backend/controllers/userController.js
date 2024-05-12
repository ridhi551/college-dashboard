const csvParser = require('csv-parser'); 
const fs = require('fs');
const User = require("../model/model")


const uploadCSV = async (req, res) => {
    try {
        const csvData = await new Promise((resolve, reject) => {
            const results = [];

            fs.createReadStream(req.file.path)
                .pipe(csvParser())
                .on('data', (data) => {
                    const lowercaseData = Object.fromEntries(
                        Object.entries(data).map(([key, value]) => [key.toLowerCase(), value])
                    );
                    results.push(lowercaseData);
                })
                .on('end', () => {
                    resolve(results);
                })
                .on('error', (error) => {
                    reject(error);
                });
        });

        console.log(csvData);

        const users = csvData.map(row => ({
            name :row.name,
            email: row.email,
            rollNumber: row.rollno,
            semester: row.semester,
            parentage: row.parentage,
            gender: row.gender,
            mob: row.mob
        }));

        for (const user of users) {
            const newUser = new User(user);
            await newUser.save();
        }

        console.log('Data saved successfully'); 
        res.status(200).send('Data saved successfully');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error importing data');
    }
};

module.exports = { uploadCSV };

