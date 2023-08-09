# Jorge Santos - Bia test
Hello. My name is Jorge Santos. This is my test to apply as Front End developer in Bia

## Getting Started

First install the dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also check the project in vercel with the next URL:

https://bia-test-jorge-santos.vercel.app/

You can see the implemented page according the designs provided. It's a responsive website.

### Design updates
- Dark mode shows a sun icon to leave it more familiar to the user.
- Breakpoints used are the default you can find in Tailwind.
- When a region is selected, the user can see the selected region in the dropdown text.
- In the country list, each country has a hover state (scale)

### App details
- Search bar redirects to a new page and will show the results. Each country will redirects to the corresponding country page and will show the country information.
- Region options redirect to a new page and will show the results.
- Search bar and Region filter show separated results.

### Observations
- One option to implement the test was to use the search bar and filter in the same page. This helps to show the results faster. I did not implement it because using 'use client' in all the page is a bad practice, so I decided not to use this option. This is the reason why I used specific pages for the filter and the search bar
