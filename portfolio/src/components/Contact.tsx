import React, { useRef, useState } from 'react';
//import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const commonTextFieldStyle = {
    width: '100%',
    '& .MuiInputBase-input': {
      color: '#222',
      background: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      '&:hover fieldset': {
        borderColor: '#5000ca',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#666',
      '&.Mui-focused': {
        color: '#5000ca',
      },
    },
    '& .MuiFormHelperText-root': {
      color: '#666',
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Uncomment below if you want to enable the emailJS

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_w9ubwlj', 'template_5qsiiua', templateParams, 'bawu6quV3NkzGr121').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            sx={{ '& > *': { marginBottom: 2 } }}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-input"
                label="Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : " "}
                sx={commonTextFieldStyle}
              />
              <TextField
                required
                id="email-input"
                label="Contact"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : " "}
                sx={commonTextFieldStyle}
              />
            </div>
            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : " "}
              sx={commonTextFieldStyle}
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              onClick={sendEmail}
              sx={{ 
                backgroundColor: '#5000ca',
                '&:hover': {
                  backgroundColor: '#3a0096',
                },
                padding: '10px 24px',
              }}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;