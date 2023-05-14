export function greet (app : {message : Function}) {
    app.message(/^greet me$/, async ({ message,say} : {message : {user : string},say : Function}) => {
      let date = new Date();
      let hour = date.getHours();
      if(6 <= hour && hour < 12) {
        await say(`good morning `)
      } else if(hour >= 12 && hour <= 17) {
        await say(`good afternoon`)
      } else if (hour > 17 && hour <= 23) {
        await say(`good evening`)
      } else {
        await say(`burning the midnight oil, eh ? Keep up the work :)`)
      }
    });
}