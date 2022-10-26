const LaundchId = () => {
  const divForm = document.createElement("form");
  const inputText = document.createElement("input");
  inputText.type = "text";

  const inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.classList.add("launch_id_submit");

  divForm.append(inputText, inputSubmit);
  return divForm;
};

export default LaundchId;
