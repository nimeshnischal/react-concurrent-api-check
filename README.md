## A test application to test concurrent request handling in React.

### 1. Run backend

```
$ cd backend
$ npm install
$ npm run start
```

### 2. Run frontend
```
$ cd react-app
$ npm install
$ npm run start
```

### 3. Access application

- The react application should automatically open up in your browser. If it does not, open your browser and navigate to:
  
> http://localhost:3000

## How to use

- Click increment once and wait.
- If the number is odd, the API call takes 1 second. If the number is even, the call takes 2 seconds.
- Click increment twice fast and notice the discrepency. The counter and the message have different numbers.
- Enable signal and try again, you'll notice the discrepancy is not there.
- Signal (using [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)) aborts the previous fetch request if not completed yet.
- Refered to [Using AbortController in React](https://wanago.io/2022/04/11/abort-controller-race-conditions-react/).