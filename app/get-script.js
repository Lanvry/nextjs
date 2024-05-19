// pages/api/get-script.js
export default function handler(req, res) {
    const script = `
        setTimeout(() => {
            document.getElementById("developed").innerHTML = "Developed by <b>Arjuna Lanang Adiwarsana (XI RPL)</b>";
        }, 100);
        function P193awd310(){
            document.getElementById("developed").innerHTML = "Developed by <b>Arjuna Lanang Adiwarsana (XI RPL)</b>";
        }
    `;
    res.status(200).send(script);
}
