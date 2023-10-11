
fetch('token_keys.json')
    .then(response => response.json())
    .then(data => {
        
        const api = data.api;
        const connKey = data.connKey;

        let schoolDB = {};

        function saveData() {

            let rollNo = document.getElementById('rollNo').value;
            let fullName = document.getElementById('fullName').value;
            let studentData = {
                'Roll-No': rollNo,
                'Full-Name': fullName,
                'Class': document.getElementById('class').value,
                'Birth-Date': document.getElementById('birthDate').value,
                'Address': document.getElementById('address').value,
                'Enrollment-Date': document.getElementById('enrollmentDate').value
            };
            schoolDB[rollNo] = studentData;

            resetForm();
        }

        function updateData() {

            let rollNo = document.getElementById('rollNo').value;
            let fullName = document.getElementById('fullName').value;
            schoolDB[rollNo]['Full-Name'] = fullName;
            schoolDB[rollNo]['Class'] = document.getElementById('class').value;
            schoolDB[rollNo]['Birth-Date'] = document.getElementById('birthDate').value;
            schoolDB[rollNo]['Address'] = document.getElementById('address').value;
            schoolDB[rollNo]['Enrollment-Date'] = document.getElementById('enrollmentDate').value;

            resetForm();
        }

        function resetForm() {

            document.getElementById('studentForm').reset();
            document.getElementById('saveButton').disabled = true;
            document.getElementById('updateButton').disabled = true;
            document.getElementById('resetButton').disabled = true;
            document.getElementById('rollNo').disabled = false;
        }

        document.getElementById('rollNo').disabled = false;
        document.getElementById('saveButton').disabled = true;
        document.getElementById('updateButton').disabled = true;
        document.getElementById('resetButton').disabled = true;
        document.getElementById('rollNo').addEventListener('input', () => {
            let rollNo = document.getElementById('rollNo').value;
            if (schoolDB[rollNo]) {

                document.getElementById('updateButton').disabled = false;
                document.getElementById('resetButton').disabled = false;

                document.getElementById('fullName').value = schoolDB[rollNo]['Full-Name'];
                document.getElementById('class').value = schoolDB[rollNo]['Class'];
                document.getElementById('birthDate').value = schoolDB[rollNo]['Birth-Date'];
                document.getElementById('address').value = schoolDB[rollNo]['Address'];
                document.getElementById('enrollmentDate').value = schoolDB[rollNo]['Enrollment-Date'];
            } else {

                document.getElementById('saveButton').disabled = false;
                document.getElementById('resetButton').disabled = false;
            }
        });
    })
    .catch(error => {
        console.error('Failed to load token keys:', error);
    });