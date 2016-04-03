var dbConn = require('mongodb').MongoClient.connect('mongodb://localhost/l3');

function saveInterview(interview) {
    // console.log('save', interview);
    return dbConn.then(function(db) {
        return db.collection('interview').insert(interview);
    });
}
module.exports = {
    dbConn: dbConn,
    saveInterview: saveInterview,
    saveInterviews: function(interviews) {
        var interviewPromises = [];
        interviews.forEach(function(interview) {
            interview.Date = new Date(interview.Date);
            interviewPromises.push(saveInterview(interview));
        });
        return Promise.all(interviewPromises);
    }
};
