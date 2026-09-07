import qrcode

# Put your website URL here
website_url =  "https://princethakur30.github.io/happybirthday/"

qr = qrcode.make(website_url)

qr.save("birthday_qr.png")

print("🎁 Birthday QR Code created!")
print("Saved as birthday_qr.png")
