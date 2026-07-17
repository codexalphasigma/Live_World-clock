import datetime
import time
from zoneinfo import ZoneInfo

cities = {
    "New York": "America/New_York",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo",
    "Delhi": "Asia/Kolkata",
    "Sydney": "Australia/Sydney"
}

while True:
    print("\n=== Live World Clock ===")
    for city, tz_name in cities.items():
        now = datetime.datetime.now(ZoneInfo(tz_name))
        print(f"{city}: {now.strftime('%Y-%m-%d %H:%M:%S')}")
    time.sleep(1)
