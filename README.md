# VELORA MOTORS — Luxury Car Shop

A polished mini e-commerce project built with:

- HTML5
- CSS3
- Vanilla JavaScript
- Python Flask
- SQLite

## What it does

Users can:

1. Browse the luxury car shop.
2. Search cars.
3. Filter by brand and type.
4. Sort by price/name.
5. Open a full product page.
6. Add cars to a session-based cart.
7. Change quantities/remove cars.
8. Checkout with customer and delivery details.
9. Select a demo payment method.
10. Place an order.
11. Receive an order confirmation number.

Orders are saved in SQLite.

## Run locally

From the VELORA folder:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

If Flask is already installed, you can simply run:

```powershell
python app.py
```

## GitHub

Recommended repository name:

```text
velora-motors
```

Do not upload your virtual environment. The included `.gitignore` excludes it.

## Render

Build command:

```text
pip install -r requirements.txt
```

Start command:

```text
gunicorn app:app
```

### SQLite note for Render

This demo uses SQLite. Render's standard web-service filesystem is not intended for permanent SQLite data storage, so deployed order data can be lost after a restart/redeploy. For a real production store, use a hosted database such as PostgreSQL.

## Payment note

The checkout is intentionally a **demo checkout** for a mini project. It does not connect to a real payment gateway and does not process real money.

## Project structure

```text
VELORA/
├── app.py
├── database.db
├── requirements.txt
├── README.md
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── shop.html
│   ├── product.html
│   ├── cart.html
│   ├── checkout.html
│   └── success.html
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
└── .gitignore
```

## Disclaimer

VELORA MOTORS is a fictional educational/demo project. Vehicle information and prices are sample data and should be verified before any commercial use.
