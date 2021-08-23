import React from "react";

function ExpenseCard({ expenseProps }) {
  return (
    <div
      class="cardamount shadow mb-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
      }}
    >
      <div
        class="card-header py-3 justify-content-between"
        style={{
          background:
            "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
        }}
      >
        <h6 class="m-0 font-weight-bold text-primary text-light mb-2">
          EXPENSE DETAILS
        </h6>

        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Total Sales */}
              </div>
              <div class=" mb-0 font-weight-bold text-light">$ CASH</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {expenseProps.value1}
              </span>
            </div>
          </div>
        </span>
        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div class=" mb-0 font-weight-bold text-light">$ CREDIT</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {expenseProps.value2}
              </span>
            </div>
          </div>
        </span>
        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div class=" mb-0 font-weight-bold text-light">$ CHECK</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {expenseProps.value3}
              </span>
            </div>
          </div>
        </span>
        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Cash */}
              </div>
              <div class="h3 mb-0 font-weight-bold text-light">$ TOTAL</div>
            </div>
            <div class="col-auto">
              <span class="h3 mb-0 font-weight-bold text-light">
                {expenseProps.value4}
              </span>
            </div>
          </div>
        </span>
      </div>

      <div class="card-body">
        <div class="chart-pie pt-4 pb-2"></div>
        <div class="mt-4 text-center small">
          <span class="mr-2"></span>
          <span class="mr-2"></span>
          <span class="mr-2"></span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
