let alarmTimeout;
const alarmSound = document.getElementById('alarmSound');

document.getElementById('setAlarm').addEventListener('click', function() {
    const alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime) {
        const now = new Date();
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmTime.split(':')[0], alarmTime.split(':')[1]);

        if (alarmDate.getTime() < now.getTime()) {
            alarmDate.setDate(alarmDate.getDate() + 1); // Jika waktu alarm sudah lewat, set untuk hari berikutnya
        }

        const timeToAlarm = alarmDate.getTime() - now.getTime();
        document.getElementById('alarmStatus').innerText = `Alarm diset untuk ${alarmDate.toLocaleTimeString()}`;

        clearTimeout(alarmTimeout);
        alarmTimeout = setTimeout(() => {
            alarmSound.play();
            alert('Alarm berbunyi!');
            document.getElementById('alarmStatus').innerText = '';
        }, timeToAlarm);
    } else {
        alert('Silakan pilih waktu untuk alarm.');
    }
});