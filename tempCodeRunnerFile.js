if (!inputNumber) {
    console.log(`no number enter the correct number ..`);
  } else if (inputNumber === randomNumber) {
    console.log(`correct guessed`);
  } else if (inputNumber > randomNumber) {
    console.log(`guess is high`);
  } else if (inputNumber < randomNumber) {
    console.log(`guess is low`);
  } else {
    console.log(`try next time..`);
  }