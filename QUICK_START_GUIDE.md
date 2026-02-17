# Quick Start Guide - February Data

## 🚀 Getting Started

Your website now has **complete February 2026 data** with month filtering!

## How to Use

### 1. Start the Server
```bash
cd performance
npm start
```
Server will run on `http://localhost:3000`

### 2. View the Website
Open your browser and go to:
```
http://localhost:3000
```

### 3. Month Selection
- **February** loads automatically (default)
- Click **"Feb (Current)"** to view February 2026 data
- Click **"Jan"** to view January 2026 data
- Active button is highlighted
- Report title updates automatically

## Features at a Glance

| Feature | Status |
|---------|--------|
| February data display | ✅ Working |
| January data display | ✅ Working |
| Month selection buttons | ✅ Working |
| Report title updates | ✅ Working |
| Daily breakdown | ✅ Working |
| Grand totals | ✅ Working |
| Auto-refresh (10 mins) | ✅ Working |

## What Changed?

### The Easy Version:
- Added your February Google Sheet to the system
- Created month selection buttons
- Made February the default view
- Everything auto-updates when you switch months

### The Technical Version:
- Server now has `/api/leaderboard/:month` endpoint
- Frontend uses `currentMonth` variable to track selection
- HTML buttons trigger month changes
- Data fetches from appropriate Google Sheet automatically

## Data Locations

```
📊 January 2026
   └─ Original Google Sheet
   
📊 February 2026
   └─ Your provided sheet (gid=1825927822)
```

## File Structure

```
performance/
├── public/
│   ├── index.html    (Updated - month buttons)
│   ├── app.js        (Updated - month logic)
│   ├── date-filter.js
│   ├── styles.css
│   └── ...
│
├── server.js         (Updated - February URL + API)
├── package.json
└── ...
```

## Common Tasks

### To View February Data
```
1. Open http://localhost:3000
2. Data shows automatically
3. Or click "Feb (Current)" button
```

### To View January Data
```
1. Click "Jan" button
2. Data updates immediately
```

### To Switch Back to February
```
1. Click "Feb (Current)" button
2. Data updates immediately
```

## Troubleshooting

### If data doesn't load:
- Check server is running: `npm start`
- Check browser console for errors (F12)
- Verify Google Sheets are accessible
- Check network tab in DevTools

### If buttons don't work:
- Refresh the page (Ctrl+R)
- Check browser console for JavaScript errors
- Clear browser cache
- Try different browser

### If title doesn't update:
- Refresh the page
- Check JavaScript is enabled
- Check browser console for errors

## API Endpoints

```
GET /api/leaderboard/1     → January 2026 data
GET /api/leaderboard/2     → February 2026 data
```

Both return JSON with:
- Daily breakdown rows
- Grand total row
- All calculation fields

## Expected Output

### Page Load
```
Title: Daily Performance Report - February 2026
Active Button: Feb (Current)
Data: February 2026 records with grand total
```

### After Clicking Jan
```
Title: Daily Performance Report - January 2026
Active Button: Jan
Data: January 2026 records with grand total
```

## Column Details

Each row includes:
- **Date**: The date (DD/MM/YYYY format)
- **New**: New loan counts
- **Repeat**: Repeat loan counts
- **Total Cases**: Combined count
- **Loan Amount**: Total loan amount
- **PF Amount**: Total PF amount
- **Disbursal Amount**: Total disbursed
- **Repay Amount**: Total repaid

## Support Files

Created documentation files:
- `FEBRUARY_DATA_IMPLEMENTATION.md` - Complete technical details
- `IMPLEMENTATION_COMPLETE.md` - Implementation summary
- `QUICK_START_GUIDE.md` - This file

## Next Steps

1. ✅ Run the server
2. ✅ Test month switching
3. ✅ Verify data displays correctly
4. ✅ Check calculations are accurate
5. ✅ Share with team

---

**Everything is ready to use!** 🎉

No additional setup needed. Just start the server and open the website.
