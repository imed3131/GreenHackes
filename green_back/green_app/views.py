from django.shortcuts import render
from models import *
import imaplib
import email
from email.header import decode_header

def extract_email():
    # IMAP server address for Gmail
    imap_server = 'imap.gmail.com'

    # Connect to the IMAP server
    mail = imaplib.IMAP4_SSL(imap_server)

    # Login to the email account
    mail.login('greenhackers0@gmail.com', 'B6YZe%E.g-j%MiK')

    # Select the mailbox
    mail.select('inbox')

    # Search for all emails
    _, data = mail.search(None, 'ALL')
    subject = []
    expediteur = []
    date = []
    content = []
    for num in data[0].split():
        _, msg_data = mail.fetch(num, '(RFC822)')
        msg = email.message_from_bytes(msg_data[0][1])

        subject[num] = msg.get('Subject')
        expediteur[num] = msg.get('From')
        date[num] = msg.get('Date')
        content[num] = ""
        for part in msg.walk():
            if part.get_content_type() == 'text/plain':
                content[num] += part.as_string()

        # Decode email subject
        """subject = decode_header(msg['Subject'])[0][0]
        if isinstance(subject, bytes):
            subject = subject.decode()"""

        # Extract email body
        if msg.is_multipart():
            for part in msg.walk():
                content_type = part.get_content_type()
                content_disposition = str(part.get("Content-Disposition"))

                if "attachment" not in content_disposition:
                    body = part.get_payload(decode=True).decode()
        else:
            body = msg.get_payload(decode=True).decode()

        


# Create your views here.
