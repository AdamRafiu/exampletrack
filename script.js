// Mock data for flight tickets
const flightTickets = [
    { ticketNumber: "ABC123", flight: "AA123", departure: "New York", destination: "Los Angeles", time: "10:00 AM" },
    { ticketNumber: "XYZ456", flight: "BB456", departure: "Chicago", destination: "Miami", time: "2:00 PM" },
    { ticketNumber: "DEF789", flight: "CC789", departure: "San Francisco", destination: "Seattle", time: "6:00 PM" },
  ];
  
  // Function to simulate asynchronous search
  async function searchFlightTicket(ticketNumber) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ticket = flightTickets.find((t) => t.ticketNumber === ticketNumber);
        resolve(ticket || null);
      }, 1000); // Simulate network delay
    });
  }
  
  // Event listener for search button
  document.getElementById("searchButton").addEventListener("click", async () => {
    const ticketNumber = document.getElementById("searchInput").value.trim();
    const outputDiv = document.getElementById("output");
  
    if (!ticketNumber) {
      outputDiv.innerHTML = "<p>Please enter a ticket number.</p>";
      return;
    }
  
    outputDiv.innerHTML = "<p>Searching...</p>";
  
    const ticket = await searchFlightTicket(ticketNumber);
  
    if (ticket) {
      outputDiv.innerHTML = `
        <p><strong>Ticket Number:</strong> ${ticket.ticketNumber}</p>
        <p><strong>Flight:</strong> ${ticket.flight}</p>
        <p><strong>Departure:</strong> ${ticket.departure}</p>
        <p><strong>Destination:</strong> ${ticket.destination}</p>
        <p><strong>Time:</strong> ${ticket.time}</p>
      `;
    } else {
      outputDiv.innerHTML = "<p>No ticket found with that number.</p>";
    }
  });