$(document).ready(function() {
    $('#formSubmitButton').click(function(event) {
        // Clear all previous error messages
        $("#pep_err").html('');
        $("#criminalofn_err").html('');
        $("#polCase_err").html('');
        $("#nonCurDis_err").html('');
        $("#comShare_err").html('');

        let isValid = true; // Validation flag

        // Politically Exposed Person (PEP) Validation
        if (!$('input[name="isPEP"]:checked').val()) {
            $('#pep_err').html('This field is required');
            isValid = false;
        }

        // Criminal Offense Validation
        if (!$('input[name="criminalofn"]:checked').val()) {
            $('#criminalofn_err').html('This field is required');
            isValid = false;
        }

        // Police Cases Validation
        if (!$('input[name="polCase"]:checked').val()) {
            $('#polCase_err').html('This field is required');
            isValid = false;
        }

        // Non-curable Disease Validation
        if (!$('input[name="nonCurDis"]:checked').val()) {
            $('#nonCurDis_err').html('This field is required');
            isValid = false;
        }

        // Company Shares Validation
        if (!$('input[name="comShare"]:checked').val()) {
            $('#comShare_err').html('This field is required');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            // Uncomment the following line to allow form submission
            // $("#myForm").submit();
        }

        // Prevent form submission if validation fails
        event.preventDefault();
    });
});
