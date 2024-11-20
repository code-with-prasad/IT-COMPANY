$('#saveForm').on('submit', function (e) {
    e.preventDefault();

    $("#name_err").html('');
    $("#dob_err").html('');
    $("#gender_err").html('');
    $("#email_err").html('');
    $("#mobile_err").html('');
    $("#altMobile_err").html('');
    $("#meretialSta_err").html('');
    $("#husName_err").html('');
    $("#husMobile_err").html('');
    $("#crntAdd_err").html('');
    $("#perAdd_err").html('');
    $("#aadhar_err").html('');
    // Bank Details Error
    $("#bankName_err").html('');
    $("#bankBranch_err").html('');
    $("#bankAdd_err").html('');
    $("#ifsc_err").html('');
    $("#micr_err").html('');

    // Personality Details Error
    $("#pep_err").html('');
    $("#criminalOfn_err").html('');
    $("#polCase_err").html('');
    $("#nonCurDis_err").html('');
    $("#comShare_err").html('');

    // Education Qualification Details Error 
    $("#matSchool_err").html('');
    $("#matBoard_err").html('');
    $("#matYear_err").html('');
    $("#matMark_err").html('');

    // Check Validate 

    // Full Name Validation
    if ($('#name').val() == "") {
        $('#name_err').html('Enter your  Name');
    }

     // Date of Birth Validation
    else if ($('#dob').val() == "") {
        $('#dob_err').html('Please enter your Date of Birth');
    }

     // Gender Validation (Radio Button)
    else if (!$('input[name="gender"]:checked').val()) {
        $('#gender_err').html('Please select your gender');
    }

     // Email Validation
    else if ($('#email').val() == "") {
        $('#email_err').html('Please enter a valid email id');
    }

    // Mobile Number Validation
    else if ($('#mobile').val() == "") {
        $('#mobile_err').html('Enter your 10 digit mobile no.');
    }
    else if (!/^\d{10}$/.test($('#mobile').val())) {
        $('#mobile_err').html('Invalid 10 digit mobile no.');
    }

    // Alternate Mobile Validation
    else if ($('#altMobile').val() == "") {
        $('#altMobile_err').html('Enter your 10 digit mobile no.');
    }
    else if (!/^\d{10}$/.test($('#altMobile').val())) {
        $('#altMobile_err').html('Invalid 10 digit mobile no.');
    }

    // Marital Status Validation (Radio Button)
    else if (!$('input[name="meretialSta"]:checked').val()) {
        $('#meretialSta_err').html('Please select your Marital Status');
    }

    // Husband/Father Name Validation
    else if ($('#husName').val() == "") {
        $('#husName_err').html('Enter your Husband/Father Name');
    }

    // Husband/Father Mobile Validation
    else if ($('#husMobile').val() == "") {
        $('#husMobile_err').html('Enter your 10 digit mobile no.');
    } else if (!/^\d{10}$/.test($('#husMobile').val())) {
        $('#husMobile_err').html('Invalid 10 digit mobile no.');
    }

    // Current Address Validation
    else if ($('#crntAdd').val() == "") {
        $('#crntAdd_err').html('This field is required ');
    }

    // Permanent Address Validation
    else if ($('#perAdd').val() == "") {
        $('#perAdd_err').html('This field is required ');
    }

    // Aadhar Number Validation
    else if ($('#aadhar').val() == "") {
        $('#aadhar_err').html('This field is required ');
    } else if (!/^\d{12}$/.test($('#aadhar').val())) {
        $('#aadhar_err').html('Invalid aadhar no.');
    }

    // Bank Details
    // Bank Name Validation
    else if ($('#bankName').val() == "") {
        $('#bankName_err').html('This field is required ');
    }

    // Bank Branch Validation
    else if ($('#bankBranch').val() == "") {
        $('#bankBranch_err').html('This field is required ');
    }

    // Bank Address Validation
    else if ($('#bankAdd').val() == "") {
        $('#bankAdd_err').html('This field is required ');
    }

     // IFSC Code Validation
    else if ($('#ifsc').val() == "") {
        $('#ifsc_err').html('This field is required');
        isValid = false;
    } else if (!/^[A-Z]{4}\d{7}$/.test($('#ifsc').val())) {
        $('#ifsc_err').html('Invalid IFSC code. It should be 4 letters followed by 7 digits.');
    }

    // MICR Code Validation
    else if ($('#micr').val() == "") {
        $('#micr_err').html('This field is required');
    } else if (!/^\d{9}$/.test($('#micr').val())) {
        $('#micr_err').html('Invalid MICR code. It should be exactly 9 digits.');
    }

    // Personality
     // Politically Exposed Person (PEP) Validation
    else if (!$('input[name="isPEP"]:checked').val()) {
        $('#pep_err').html('This field is required');
    }

    // Criminal Offense Validation
    else if (!$('input[name="criminalofn"]:checked').val()) {
        $('#criminalofn_err').html('This field is required');
    }

     // Police Cases Validation
    else if (!$('input[name="polCase"]:checked').val()) {
        $('#polCase_err').html('This field is required');
    }

     // Non-curable Disease Validation
    else if (!$('input[name="nonCurDis"]:checked').val()) {
        $('#nonCurDis_err').html('This field is required');
    }

     // Company Shares Validation
    else if (!$('input[name="comShare"]:checked').val()) {
        $('#comShare_err').html('This field is required');
    }

    // Education Qualification 
    else if ($('#matSchool').val() == "") {
        $('#matSchool_err').html('This field is required');
    }
    else if ($('#matBoard').val() == "") {
        $('#matBoard_err').html('This field is required');
    }
    else if ($('#matYear').val() == "") {
        $('#matYear_err').html('This field is required');
    }
    else if (!/^\d{4}$/.test($('#matYear').val())) {
        $('#matYear_err').html('Invalid Year.');
    }
    else if ($('#matMark').val() == "") {
        $('#matMark_err').html('This field is required');
    }


    else {
        // alert('working');
        $("#loader").removeClass('d-none')
        $('#submitBtn').prop('disabled', true).val('PLEASE WAIT ......................');
    }

});
