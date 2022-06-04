let month = prompt("enter a number for month");
switch (month) {
  case "farvardin":
  case "ordibehesht":
  case "khordad":
    console.log("fasl bahar");
    break;
  case "tir":
  case "mordad":
  case "shahrivar":
    console.log("fasl tabestan");
    break;
  case "mehr":
  case "aban":
  case "azar":
    console.log("fasl paiez");
    break;
    case "day":
  case "bahman":
  case "esfand":
    console.log("fasl zemestan");
    break;
    default:
      console.log("not a valid month")
}
