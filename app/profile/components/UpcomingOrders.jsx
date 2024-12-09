import React from "react";

const UpcomingOrders = ({ orders, setModalOpen }) => {
  if (!orders) {
    return null;
  }
  return (
    <div className="Upcoming Orders">
      <div className="text-gray-600 mt-3 ml-1">
        {`Upcoming Orders`}
        <div className="UpcomingStyle flex flex-col m-3 p-4 rounded-lg shadow-md border border-grey-200">
          <div className="dataContainer flex justify-between">
            <div className="Left">
              <div>
                <span className="font-bold">{orders?.[0]?.deliveryDate}</span>
                <span className="text-xs text-gray-500 ml-3">
                  {orders?.[0]?.recipes}
                </span>
                <span className="bg-blue-100 text-blue-500 text-xs rounded-full px-3 py-1 ml-3">
                  {orders?.[0]?.status}
                </span>
                <div>
                  <div className="text-gray-400 mt-2">
                    <span>For: </span>
                    <span className="text-gray-500 text-xs mt-2">
                      {orders.map((dog) => dog.dogName).join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right flex">
              <button
                className="text-lg font-extrabold text-green-700"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                {`>`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOrders;
