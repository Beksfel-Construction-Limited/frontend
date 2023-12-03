import React, { useState } from "react";

const YourInvoiceComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  const handleCheckboxChange = (invoiceId: number) => {
    setSelectedInvoices((prevSelectedInvoices) => {
      const isSelected = prevSelectedInvoices.includes(invoiceId);
      if (isSelected) {
        return prevSelectedInvoices.filter((id) => id !== invoiceId);
      } else {
        return [...prevSelectedInvoices, invoiceId];
      }
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const invoices = [
    { id: 1, invoiceNumber: "INV-001", amount: 1000, status: "Paid" },
    { id: 2, invoiceNumber: "INV-002", amount: 1500, status: "Pending" },
    { id: 3, invoiceNumber: "INV-003", amount: 800, status: "Paid" },
    { id: 4, invoiceNumber: "INV-004", amount: 1200, status: "Pending" },
    { id: 5, invoiceNumber: "INV-005", amount: 2000, status: "Paid" },
  ];

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.invoiceNumber.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Nav */}
      <div
        className={`w-64 bg-gray-800 text-white ${
          isSideNavOpen ? "block" : "hidden"
        }`}
      >
        {/* Your side nav content goes here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top App Bar */}
        <header className="bg-white border-b shadow">
          <div className="flex items-center justify-between p-4">
            {/* Menu Icon to toggle side nav */}
            <button onClick={toggleSideNav}>
              <svg
                className="w-6 h-6 text-gray-500 cursor-pointer"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="invoice-search"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for invoices"
                onChange={handleSearchChange}
              />
            </div>

            {/* Add new invoice button */}
            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5">
              <span className="sr-only">Add Invoice button</span>
              Add New Invoice
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-auto overflow-y-auto bg-gray-100 p-8">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-invoices"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="checkbox-all-invoices" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Invoice Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-invoice-${invoice.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        onChange={() => handleCheckboxChange(invoice.id)}
                        checked={selectedInvoices.includes(invoice.id)}
                      />
                      <label
                        htmlFor={`checkbox-invoice-${invoice.id}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4">{invoice.invoiceNumber}</td>
                  <td className="px-6 py-4">${invoice.amount}</td>
                  <td className="px-6 py-4">{invoice.status}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Edit invoice modal */}
          <div
            id="editInvoiceModal"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            {/* ... (Modal content) ... */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourInvoiceComponent;
