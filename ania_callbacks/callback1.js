function firstAction() {
  console.log("i am the first function");
}

function secondAction() {
  console.log("i am the second function");
}

// firstAction()
setTimeout(firstAction, 3000);
secondAction();
