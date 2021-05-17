const sName = document.getElementById("enterSName");
const rName = document.getElementById("recName");
const userName = document.getElementById("enterName");
const rs = document.getElementById("enterAmount");
const submitBtn = document.getElementById("sendBtn");
var no = 7;
submitBtn.addEventListener("click", () => {
  const tBody = document.getElementById("tbody");
  if (no % 2 == 0) {
    var str = ` <tr class="table-light">
    <td scope="row">${no + 1}</td>
    <td>${rName.value}</td>
    <td>${userName.value}@email.com</td>
    <td>
        <p id="shreyaBankBalance">${rs.value}</p>
    </td>
  </tr>`;
  } else {
    var str = ` <tr class="table-info">
    <td scope="row">${no + 1}</td>
    <td>${rName.value}</td>
    <td>${userName.value}@email.com</td>
    <td>
        <p id="shreyaBankBalance">${rs.value}</p>
    </td>
  </tr>`;
  }
  tBody.innerHTML += str;
  alert(
    `Transaction Successful, You sent ${rs.value} rupees to ${rName.value}  `
  );
  rName.value = "";
  userName.value = "";
  rs.value = "";
  sName.value = "";
  no++;
});
