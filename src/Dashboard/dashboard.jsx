import React, { useState } from 'react';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to handle mouseover event
  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  // Menu Toggle state
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
   
   
        <div className="container">
          <div className="navigation">
            <ul>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="logo-apple"></ion-icon>
                  </span>
                  <span className="title">Markez app</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title">Customers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </span>
                  <span className="title">Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="help-outline"></ion-icon>
                  </span>
                  <span className="title">Help</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="settings-outline"></ion-icon>
                  </span>
                  <span className="title">Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                  </span>
                  <span className="title">Password</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                  <span className="title">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="main">
            <div className="topbar">
              <div className="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>

              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>

              <div className="user">
                <img src="assets/imgs/customer01.jpg" alt="" />
              </div>
            </div>

            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1,504</div>
                  <div className="cardName">Daily Views</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">80</div>
                  <div className="cardName">Sales</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">284</div>
                  <div className="cardName">Comments</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">$7,842</div>
                  <div className="cardName">Earning</div>
                </div>
                <div className="iconBx">
                  <ion-icon name="cash-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="details">
              <div className="recentOrders">
                <div className="cardHeader">
                  <h2>Recent Orders</h2>
                  <a href="#" className="btn">View All</a>
                </div>

                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Payment</td>
                      <td>Status</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Star Refrigerator</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    {/* More order rows... */}
                  </tbody>
                </table>
              </div>

              <div className="recentCustomers">
                <div className="cardHeader">
                  <h2>Recent Customers</h2>
                </div>

                <table>
                  {/* Customer rows... */}
                </table>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
