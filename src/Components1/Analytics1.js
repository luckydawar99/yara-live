import React from "react";
import ReactApexChart from "react-apexcharts"; // Import for ApexCharts
import Chart from "react-apexcharts";

const Analytics1 = () => {
  const totalVisitsData = {
    options: {
      chart: {
        id: "total-visits",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#e7515a"],
      stroke: { width: 2, curve: "smooth" }, // Curved graph
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Visits",
        data: [100, 800, 300, 900, 200, 600, 900],
      },
    ],
  };

  // Data for Total Orders Chart

  const totalOrdersData = {
    options: {
      chart: {
        id: "total-visits",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#e2a03f"],
      stroke: { width: 2, curve: "smooth" }, // Curved graph
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Visits",
        data: [1000, 200, 800, 100, 900, 300, 800],
      },
    ],
  };

  // Data for Total Downloads Chart
  const totalDownloadsData = {
    options: {
      chart: {
        id: "total-downloads",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#009688"],
      stroke: { width: 2 },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Downloads",
        data: [5, 55, 2, 60, 45, 55, 100],
      },
    ],
  };

  // Data for Revenue Chart

  const revenueData = {
    options: {
      chart: {
        id: "THIS MONTH ORDERED",
        type: "line",
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      colors: ["#e2a03f", "#42a5f5"], // Different colors for Online Course and Books
      stroke: { width: 2 },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: { show: true },
      grid: { show: true },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Online Course",
        data: [200, 600, 700, 600, 900, 1000, 1100],
      },
      {
        name: "Books",
        data: [400, 500, 600, 900, 800, 850, 900],
      },
    ],
  };
  const thismounthorder = {
    options: {
      chart: {
        id: "total-visits",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#e2a03f"],
      stroke: { width: 2, curve: "smooth" }, // Curved graph
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Visits",
        data: [1000, 200, 800, 100, 900, 300, 800],
      },
    ],
  };

  const fourRowChartsData = [
    {
      title: "Revenue",
      data: [1000, 200, 800, 100, 900, 300, 800],
      count: `$201`,
      Symbol: "",
      options: {
        chart: {
          id: "revenue-row",
          type: "line",
          height: 100,
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Curved graph
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: true },
      },
    },
    {
      title: "Followers",
      data: [10, 20, 30, 40, 50, 60, 70],
      count: 31.6,
      Symbol: "K",
      options: {
        chart: {
          id: "followers-row",
          type: "line",
          height: 100,
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Curved graph
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: true },
      },
    },
    {
      title: "Referral",
      data: [15, 25, 35, 45, 55, 65, 75],
      count: 1900,

      options: {
        chart: {
          id: "referral-row",
          type: "line",
          height: 100,
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Curved graph
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: true },
      },
    },
    {
      title: "Engagement Percentage",
      data: [40, 50, 60, 70, 80, 90, 100],
      count: 18,
      Symbol: "%",
      options: {
        chart: {
          id: "engagement-row",
          type: "line",
          height: 100,
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Curved graph
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: true },
      },
    },
  ];

  return (
    <>
      {/* end */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel-content">
              <h4 className="main-title">Welcome To Socimo</h4>
              <div className="row merged20 mb-4">
                {/* Total Visits Card */}
                <div className="col-lg-4 col-md-6">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Visits</p>
                      <p className="w-stats">423,964</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-users">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                    </div>
                    <div className="w-chart-render-one"></div>
                  </div>
                </div>
                {/* Total Orders Card */}
                <div className="col-lg-4 col-md-6">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Orders</p>
                      <p className="w-stats">7,929</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-briefcase">
                          <rect
                            x={2}
                            y={7}
                            width={20}
                            height={14}
                            rx={2}
                            ry={2}
                          />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </span>
                    </div>
                    <div className="w-chart-render-one">
                      <ReactApexChart
                        options={totalOrdersData.options}
                        series={totalOrdersData.series}
                        type="line"
                        height={95}
                      />
                    </div>
                  </div>
                </div>
                {/* Total Downloads Card */}
                <div className="col-lg-4 col-md-12">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Downloads</p>
                      <p className="w-stats">7,929</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-download-cloud">
                          <polyline points="8 17 12 21 16 17" />
                          <line x1={12} y1={12} x2={12} y2={21} />
                          <path d="M20.61 16.29a6 6 0 0 0-11.22 0" />
                        </svg>
                      </span>
                    </div>
                    <div className="w-chart-render-one">
                      <ReactApexChart
                        options={totalDownloadsData.options}
                        series={totalDownloadsData.series}
                        type="line"
                        height={95}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row merged20 mb-4">
                {/* Revenue Card */}
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="d-widget">
                    <div className="d-widget-title">
                      <h5>Revenue</h5>
                      <select className="browser-default custom-select">
                        <option value={3}>Last Day</option>
                        <option value={2}>Week</option>
                        <option selected>Monthly</option>
                        <option value={1}>Yearly</option>
                      </select>
                    </div>
                    <div className="d-widget-content">
                      <div className="tabs tab-content">
                        <div className="w-text d-flex justify-content-between">
                          <div>
                            <p className="w-stats">$39,945</p>
                            <p className="w-title">Total Profit</p>
                          </div>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              gap: "10px",
                            }}>
                            {/* <p className="">Online Course</p>
                            <p className="">Books</p> */}
                          </div>
                        </div>
                        <div id="content_1" className="tabcontent">
                          <ReactApexChart
                            options={revenueData.options}
                            series={revenueData.series}
                            type="line"
                            height={250}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="d-widget">
                    <div className="d-widget-title">
                      <h5>Revenue</h5>
                      <select className="browser-default custom-select">
                        <option value={3}>Last Day</option>
                        <option value={2}>Week</option>
                        <option selected>Monthly</option>
                        <option value={1}>Yearly</option>
                      </select>
                    </div>
                    <div className="d-widget-content">
                      <div className="tabs tab-content">
                        <div className="w-text d-flex justify-content-between">
                          <div>
                            <p className="w-stats">$39,945</p>
                            <p className="w-title">Total Profit</p>
                          </div>
                          <div className="" style={{display:"flex",
                            gap:"10px"
                          }}>
                            <p className="">Online Cource</p>
                            <p className="">Books</p>
                          </div>
                        </div>
                        <div id="content_1" className="tabcontent">
                          <ReactApexChart options={revenueData.options} series={revenueData.series} type="line" height={250} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Revenue Statistics Card */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="d-widget blue-bg pd-0">
                    <div className="d-widget-content">
                      <div className="w-numeric-value">
                        <div className="w-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-cart">
                            <circle cx={9} cy={21} r={1} />
                            <circle cx={20} cy={21} r={1} />
                            <path d="M1 1h4l1 8h11l1-8h4" />
                          </svg>
                        </div>
                        <div className="w-text">
                          <p className="w-title">This Month Orders</p>
                          <p className="w-stats">$39,945</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-chart-render-one">
                      <ReactApexChart
                        options={thismounthorder.options}
                        series={thismounthorder.series}
                        type="line"
                        height={250}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Four Row Charts */}
              <div className="row">
                {fourRowChartsData.map((chart, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                    <div className="d-widget green-bg pd-0">
                      <div className="d-widget-content">
                        <div className="w-numeric-value">
                          <div className="w-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-shopping-cart">
                              <circle cx={9} cy={21} r={1} />
                              <circle cx={20} cy={21} r={1} />
                              <path d="M1 1h4l1 8h11l1-8h4" />
                            </svg>
                          </div>
                          <div className="w-text">
                            {/* <p className="w-title">This Month Orders</p>
                            <p className="w-stats">$39,945</p> */}
                          </div>
                          <div className="w-detail">
                            <p className="w-title">{chart.title}</p>
                            <p className="w-title">
                              {chart.count}
                              <span>{chart.Symbol}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-chart-render-one">
                        <ReactApexChart
                          options={chart.options}
                          series={[{ data: chart.data }]}
                          type="line"
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics1;

// import React from 'react'

// const Analytics1 = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="panel-content">
//               <h4 className="main-title">Welcome To Socimo</h4>
//               <div className="row merged20 mb-4">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="w-chart-section">
//                     <div className="w-detail">
//                       <p className="w-title">Total Visits</p>
//                       <p className="w-stats">423,964</p>
//                       <span>
//                         <svg id="user-icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
//                     </div>
//                     <div className="w-chart-render-one">
//                       <div id="total-users" style={{ "min-height": "95px" }}>
//                         <div id="apexchartsop6ytvhw" className="apexcharts-canvas apexchartsop6ytvhw light" style={{ "width": "149px", "height": "95px" }}>
//                           <svg id="SvgjsSvg2182" width={149} height={95} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ "background": "transparent" }}>
//                             <g id="SvgjsG2184" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 35)">
//                               <defs id="SvgjsDefs2183">
//                                 <clipPath id="gridRectMaskop6ytvhw">
//                                   <rect id="SvgjsRect2188" width={151} height={62} x={-1} y={-1} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} />
//                                 </clipPath>
//                                 <clipPath id="gridRectMarkerMaskop6ytvhw">
//                                   <rect id="SvgjsRect2189" width={151} height={62} x={-1} y={-1} rx={0} ry={0} fill="#ffffff" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} />
//                                 </clipPath>
//                                 <filter id="SvgjsFilter2197" filterUnits="userSpaceOnUse">
//                                   <feFlood id="SvgjsFeFlood2198" floodColor="#e2a03f" floodOpacity="0.3" result="SvgjsFeFlood2198Out" in="SourceGraphic" />
//                                   <feComposite id="SvgjsFeComposite2199" in="SvgjsFeFlood2198Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2199Out" />
//                                   <feOffset id="SvgjsFeOffset2200" dx={2} dy={3} result="SvgjsFeOffset2200Out" in="SvgjsFeComposite2199Out" />
//                                   <feGaussianBlur id="SvgjsFeGaussianBlur2201" stdDeviation={20} result="SvgjsFeGaussianBlur2201Out" in="SvgjsFeOffset2200Out" />
//                                   <feMerge id="SvgjsFeMerge2202" result="SvgjsFeMerge2202Out" in="SourceGraphic">
//                                     <feMergeNode id="SvgjsFeMergeNode2203" in="SvgjsFeGaussianBlur2201Out" />
//                                     <feMergeNode id="SvgjsFeMergeNode2204" in="[object Arguments]" />
//                                   </feMerge>
//                                   <feBlend id="SvgjsFeBlend2205" in="SourceGraphic" in2="SvgjsFeMerge2202Out" mode="normal" result="SvgjsFeBlend2205Out" />
//                                 </filter>
//                               </defs>
//                               <line id="SvgjsLine2187" x1="82.27777777777777" y1={0} x2="82.27777777777777" y2={60} stroke="#b6b6b6" strokeDasharray={3} className="apexcharts-xcrosshairs" x="82.27777777777777" y={0} width={1} height={60} fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth={1} />
//                               <g id="SvgjsG2206" className="apexcharts-xaxis" transform="translate(0, 0)">
//                                 <g id="SvgjsG2207" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" />
//                               </g>
//                               <g id="SvgjsG2210" className="apexcharts-grid">
//                                 <line id="SvgjsLine2212" x1={0} y1={60} x2={149} y2={60} stroke="transparent" strokeDasharray={0} />
//                                 <line id="SvgjsLine2211" x1={0} y1={1} x2={0} y2={60} stroke="transparent" strokeDasharray={0} />
//                               </g>
//                               <g id="SvgjsG2191" className="apexcharts-line-series apexcharts-plot-series">
//                                 <g id="SvgjsG2192" className="apexcharts-series" seriesname="seriesx1" data:longestseries="true" rel={1} data:realindex={0}>
//                                   <path id="apexcharts-line-0" d="M 0 42C 5.794444444444443 42 10.76111111111111 52.285714285714285 16.555555555555554 52.285714285714285C 22.349999999999998 52.285714285714285 27.316666666666663 29.142857142857146 33.11111111111111 29.142857142857146C 38.90555555555555 29.142857142857146 43.87222222222222 49.714285714285715 49.666666666666664 49.714285714285715C 55.46111111111111 49.714285714285715 60.42777777777777 22.285714285714285 66.22222222222221 22.285714285714285C 72.01666666666665 22.285714285714285 76.98333333333332 38.57142857142857 82.77777777777777 38.57142857142857C 88.57222222222222 38.57142857142857 93.53888888888889 9.42857142857143 99.33333333333333 9.42857142857143C 105.12777777777777 9.42857142857143 110.09444444444443 24.85714285714286 115.88888888888889 24.85714285714286C 121.68333333333332 24.85714285714286 126.64999999999999 3.4285714285714306 132.44444444444443 3.4285714285714306C 138.23888888888888 3.4285714285714306 143.20555555555555 38.57142857142857 149 38.57142857142857" fill="none" fillOpacity={1} stroke="rgba(226,160,63,0.85)" strokeOpacity={1} strokeLinecap="butt" strokeWidth={2} strokeDasharray={0} className="apexcharts-line" index={0} clipPath="url(#gridRectMaskop6ytvhw)" filter="url(#SvgjsFilter2197)" pathto="M 0 42C 5.794444444444443 42 10.76111111111111 52.285714285714285 16.555555555555554 52.285714285714285C 22.349999999999998 52.285714285714285 27.316666666666663 29.142857142857146 33.11111111111111 29.142857142857146C 38.90555555555555 29.142857142857146 43.87222222222222 49.714285714285715 49.666666666666664 49.714285714285715C 55.46111111111111 49.714285714285715 60.42777777777777 22.285714285714285 66.22222222222221 22.285714285714285C 72.01666666666665 22.285714285714285 76.98333333333332 38.57142857142857 82.77777777777777 38.57142857142857C 88.57222222222222 38.57142857142857 93.53888888888889 9.42857142857143 99.33333333333333 9.42857142857143C 105.12777777777777 9.42857142857143 110.09444444444443 24.85714285714286 115.88888888888889 24.85714285714286C 121.68333333333332 24.85714285714286 126.64999999999999 3.4285714285714306 132.44444444444443 3.4285714285714306C 138.23888888888888 3.4285714285714306 143.20555555555555 38.57142857142857 149 38.57142857142857" pathfrom="M -1 60L -1 60L 16.555555555555554 60L 33.11111111111111 60L 49.666666666666664 60L 66.22222222222221 60L 82.77777777777777 60L 99.33333333333333 60L 115.88888888888889 60L 132.44444444444443 60L 149 60" />
//                                   <g id="SvgjsG2193" className="apexcharts-series-markers-wrap">
//                                     <g className="apexcharts-series-markers">
//                                       <circle id="SvgjsCircle2218" r={0} cx="82.77777777777777" cy="38.57142857142857" className="apexcharts-marker w1xhp3rvni no-pointer-events" stroke="#ffffff" fill="#e2a03f" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0} />
//                                     </g>
//                                   </g>
//                                   <g id="SvgjsG2194" className="apexcharts-datalabels" />
//                                 </g>
//                               </g>
//                               <line id="SvgjsLine2213" x1={0} y1={0} x2={149} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs" />
//                               <line id="SvgjsLine2214" x1={0} y1={0} x2={149} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden" />
//                               <g id="SvgjsG2215" className="apexcharts-yaxis-annotations" />
//                               <g id="SvgjsG2216" className="apexcharts-xaxis-annotations" />
//                               <g id="SvgjsG2217" className="apexcharts-point-annotations" />
//                             </g>
//                             <rect id="SvgjsRect2186" width={0} height={0} x={0} y={0} rx={0} ry={0} fill="#fefefe" opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} />
//                             <g id="SvgjsG2208" className="apexcharts-yaxis" rel={0} transform="translate(-21, 0)">
//                               <g id="SvgjsG2209" className="apexcharts-yaxis-texts-g" />
//                             </g>
//                           </svg>
//                           <div className="apexcharts-legend" />
//                           <div className="apexcharts-tooltip light" style={{ "left": "8.85493px", "top": "60.195px" }}>
//                             <div className="apexcharts-tooltip-series-group active" style={{ "display": "flex" }}>
//                               <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(226, 160, 63)" }} />
//                               <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
//                                 <div className="apexcharts-tooltip-y-group">
//                                   <span className="apexcharts-tooltip-text-label" /><span className="apexcharts-tooltip-text-value">25</span>
//                                 </div>
//                                 <div className="apexcharts-tooltip-z-group">
//                                   <span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {/* <div id="total-users" /> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="w-chart-section">
//                     <div className="w-detail">
//                       <p className="w-title">Total Orders</p>
//                       <p className="w-stats">7,929</p>
//                       <span>
//                         <svg id="bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></span>
//                     </div>
//                     <div className="w-chart-render-one">
//                       <div id="paid-visits" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-12">
//                   <div className="w-chart-section">
//                     <div className="w-detail">
//                       <p className="w-title">Total Downloads</p>
//                       <p className="w-stats">7,929</p>
//                       <span>
//                         <svg id="download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-download-cloud"><polyline points="8 17 12 21 16 17" /><line x1={12} y1={12} x2={12} y2={21} /><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg></span>
//                     </div>
//                     <div className="w-chart-render-one">
//                       <div id="total-downloads" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row merged20 mb-4">
//                 <div className="col-lg-8 col-md-6 col-sm-12">
//                   <div className="d-widget">
//                     <div className="d-widget-title">
//                       <h5 className>Revenue</h5>
//                       <select className="browser-default custom-select">
//                         <option value={3}>last day</option>
//                         <option value={2}>week</option>
//                         <option selected>Monthly</option>
//                         <option value={1}>Yearly</option>
//                       </select>
//                     </div>
//                     <div className="d-widget-content">
//                       <div className="tabs tab-content">
//                         <div id="content_1" className="tabcontent">
//                           <div id="revenueMonthly" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12">
//                   <div className="d-widget blue-bg pd-0">
//                     <div className="d-widget-content">
//                       <div className="w-numeric-value">
//                         <div className="w-icon">
//                           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
//                         </div>
//                         <div className="d-content">
//                           <span className="w-numeric-title">This Month Orders</span>
//                           <span className="w-value">3,192</span>
//                         </div>
//                       </div>
//                       <div className="w-chart">
//                         <div id="total-orders" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row merged20 mb-4">
//                 <div className="col-lg-3 col-md-6 col-sm-12">
//                   <div className="d-widget">
//                     <div className="d-widget-title"><h5 className>Revenue</h5></div>
//                     <div className="d-widget-content">
//                       <div className="w-content">
//                         <p>Daily sales Go to columns for details.</p>
//                       </div>
//                       <div className="d-icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
//                         <span>201</span>
//                       </div>
//                       <div className="w-chart">
//                         <div id="daily-sales" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 col-sm-12">
//                   <div className="d-widget pd-0 soft-blue">
//                     <div className="d-widget-meta">
//                       <div className="w-icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
//                       </div>
//                       <h5 className>Followers</h5>
//                       <p className="w-value">31.6K</p>
//                     </div>
//                     <div className="d-widget-content">
//                       <div className="w-chart">
//                         <div id="hybrid_followers" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 col-sm-12">
//                   <div className="d-widget pd-0 soft-red">
//                     <div className="d-widget-meta">
//                       <div className="w-icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
//                       </div>
//                       <h5 className>Referral</h5>
//                       <p className="w-value">1,900</p>
//                     </div>
//                     <div className="d-widget-content">
//                       <div className="w-chart">
//                         <div id="hybrid_followers1" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 col-sm-12">
//                   <div className="d-widget pd-0 soft-green">
//                     <div className="d-widget-meta">
//                       <div className="w-icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
//                       </div>
//                       <h5 className>Engagement</h5>
//                       <p className="w-value">18.2%</p>
//                     </div>
//                     <div className="d-widget-content">
//                       <div className="w-chart">
//                         <div id="hybrid_followers3" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row merged20">
//                 <div className="col-lg-3 col-md-6">
//                   <div className="d-widget">
//                     <div className="d-widget-title"><h5>Monthly Product Sales</h5></div>
//                     <div id="chart-2" className />
//                   </div>
//                 </div>
//                 <div className="col-lg-9 col-md-6">
//                   <div className="d-widget">
//                     <div className="d-widget-title"><h5>Monthly Visitors</h5></div>
//                     <div id="uniqueVisits" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Analytics1
