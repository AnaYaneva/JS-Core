/**
 * Created by PC on 7.6.2017 г..
 */
function extractUsernames(inputEmails) {
    let results = [];
    for (let email of inputEmails) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}