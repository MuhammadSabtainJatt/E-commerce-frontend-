import { faBars, faCartShopping, faChartLine, faCircleQuestion, faComment, faEye, faGear, faLock, faMagnifyingGlass, faRightFromBracket, faSackDollar, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
   
   
        <div className="">
          <div className="navigation">
            <ul>
              <li>
                <a href="#">
                  <span className="icon">
                    <FontAwesomeIcon icon={faShop} className='mb-2' />
                  </span>
                  <span className="title">Markez app</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                  <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
              <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="title">Customers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                <FontAwesomeIcon icon={faComment} />
                  </span>
                  <span className="title">Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <FontAwesomeIcon className='mb-2' icon={faCircleQuestion} />
                  </span>
                  <span className="title">order</span>
                </a>
              </li>
              
            </ul>
          </div>

          <div className="main">
            <div className="topbar">
              <div className="toggle">
              <FontAwesomeIcon icon={faBars} />
              </div>

              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  
                </label>
              </div>

              <div className="user">
              <FontAwesomeIcon icon={faUser} />
              </div>
            </div>

            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1,504</div>
                  <div className="cardName">Daily Views</div>
                </div>
                <div className="iconBx d-inline">
                <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">80</div>
                  <div className="cardName">Sales</div>
                </div>
                <div className="iconBx">
                <FontAwesomeIcon icon={faCartShopping} />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">284</div>
                  <div className="cardName">Comments</div>
                </div>
                <div className="iconBx">
                <FontAwesomeIcon icon={faComment} />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">$7,842</div>
                  <div className="cardName">Earning</div>
                </div>
                <div className="iconBx">
                <FontAwesomeIcon icon={faSackDollar} />
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
                    <tr>
                      <td>Star Refrigerator</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Star Refrigerator</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status return">Return</span></td>
                    </tr>
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
                  
                </table>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
