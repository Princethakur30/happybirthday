import qrcode

# Put your website URL here
website_url = "https://YOUR-WEBSITE-LINK.com"

qr = qrcode.make(website_url)

qr.save("birthday_qr.png")

print("🎁 Birthday QR Code created!")
print("Saved as birthday_qr.png")