describe("test payments)", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });
});

it("should add new payment on submitPayment Info()", function () {
  submitPaymentInfo();
  expect(Object.keys(allPayments).length).toEqual(1);
  expect(allPayments["payment1"].billAmt).toEqual("100");
  expect(allPayments["payment1"].tipAmt).toEqual("20");
  expect(allPayments["payment1"].tipPercent).toEqual(20);
});

it("should add empty payment input on submitPaymentInfo", function () {
  billAmtInput.value = "";
  submitPaymentInfo();
  expect(Object.keys(allPayments).length).toEqual(0);
});

it("should create new payment on createCurPayment()", function () {
  let expectedPayment = {
    billAmt: "100",
    tipAmt: "20",
    tipPercent: 20,
  };
  expet(createCurPayment()).toEqual(expectedPayment);
});

it("should not create empty payment input on createCurPayment", function () {
  billAmtInput.value = "";
  tipAmtInput.value = "";
  let curPayment = createCurPayment();

  expect(curPayment).toEqual(undefined);
});

afterEach(function () {
  billAmtInput.value = "";
  tipAmtInput.value = "";
  paymentTbody.innerHTML = "";
  summaryTds[0].innerHTML = "";
  summaryTds[1].innerHTML = "";
  summaryTds[2].innerHTML = "";
  serverTbody.innerHTML = "";
  paymentId = 0;
  allPayments = {};
});
