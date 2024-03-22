import React,  { useState, useEffect } from 'react';
import EmployeeData from '/data.json';


export default function Graduatesfilter() {
  const [data, setData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedUnivesity, setselectedUnivesity] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Filter EmployeeData based on the selected category
  const [searchNid, setSearchNid] = useState(''); // Filter EmployeeData based on ID 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'ascending', // 'ascending' or 'descending'
  });
 
  const columns = [
    { key: 'studentNationalId', label: 'National_Id' },
    { key: 'studentFullName', label: 'Full_Name' },
    { key: 'institutionUni', label: 'Institution' },
    { key: 'yearOfGraduation', label: 'Year' },
    { key: 'obtainedCertificate', label: 'Program' },
  ];
///
  const totalPages = Math.ceil(filteredEmployeeData.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 
  useEffect(() => {
    setData(EmployeeData);
    setFilteredEmployeeData(EmployeeData);
  },[selectedCategory, currentPage], []);

   useEffect(() => { // Initialize both EmployeeData and filteredEmployeeData with data from JSON
        if (selectedCategory === '') {
          setFilteredEmployeeData(data);
        }    else  {
          const filtered = data.filter((Employee) => Employee.obtainedCertificate === selectedCategory);
          setFilteredEmployeeData(filtered);
        }
      }, [selectedCategory]);

//-----  selectedYear
  useEffect(() => {
          if (selectedYear === '') {
            setFilteredEmployeeData(data);
          } else  {
            const filtered = data.filter((Employee) => Employee.yearOfGraduation === selectedYear.toString());
            setFilteredEmployeeData(filtered);
          }
        }, [selectedYear]);

  // selected University
  useEffect(() => {
          if (selectedUnivesity === '') {
            setFilteredEmployeeData(data);
          } else  {
            const filtered = data.filter((Employee) => Employee.institutionUni === selectedUnivesity);
            setFilteredEmployeeData(filtered);
          }
        }, [selectedUnivesity]);

  const handleSearch = () => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = data.filter((Employee) =>
          Employee.studentFullName.toLowerCase().includes(searchTermLowerCase)
        );
         setFilteredEmployeeData(filtered);
       };
  const handleSearchID = () => {
    const searchNationalIDLowerCase = searchNid.toLowerCase();
    const filtered = data.filter((Employee) =>
      Employee.studentNationalId.toLowerCase().includes(searchNationalIDLowerCase) );
     setFilteredEmployeeData(filtered);
      };
        const categoryOptions = [...new Set(data.map((Employee) => Employee.obtainedCertificate))];
        const yearOptions = [...new Set(data.map((Employee) => Employee.yearOfGraduation))];
        const universityOptions = [...new Set(data.map((Employee) => Employee.institutionUni))];
      

  const handleFilter = () => {
      const filtered = data.filter((employee) => {
      const yearMatch = selectedYear === '' || employee.yearOfGraduation === selectedYear;
      const departmentMatch = selectedCategory === '' || employee.obtainedCertificate === selectedCategory;
      const universityMatch = selectedUnivesity === '' || employee.institutionUni === selectedUnivesity;
      return yearMatch && departmentMatch && universityMatch;
    });

    setFilteredEmployeeData(filtered);
  };
  const resetFilters = () => {
    setSelectedYear('');
    setSelectedCategory('');
    setSearchTerm('');
    setselectedUnivesity('');
    setFilteredEmployeeData(data);
  };


  const handleSort = (columnName) => {
    const direction =
      sortConfig.key === columnName && sortConfig.direction === 'ascending'
        ? 'descending'
        : 'ascending';

    setSortConfig({ key: columnName, direction });

    const sortedData = [...filteredEmployeeData].sort((a, b) => {
      if (a[columnName] < b[columnName]) return direction === 'ascending' ? -1 : 1;
      if (a[columnName] > b[columnName]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

  // Toggle between ascending and descending order
  setFilteredEmployeeData(
    sortedData === filteredEmployeeData ? [...sortedData].reverse() : sortedData
  );
};


  return (
    <div className="filter_Main" >
    <div  className="filter_con">
      <h3>Filter Employee List by Year & University </h3>
       {/* //ID */}
       <div  className="Search_filter">
       <div className="Search_Cont" >
        <input
        type="text"  placeholder="Search by FullName" className="serachtext"
        value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}
      />
            <button  className="serachbtn" onClick={handleSearch}>Search</button> 
            
        </div>
       <div className="Search_Cont" >
        <input
             type="text"   placeholder=" Search by NationalID"  className="serachtext"
             value={searchNid}  onChange={(e) => setSearchNid(e.target.value)}      />
            <button  className="serachbtn" onClick={handleSearchID}>Search_ID</button> 
        </div>
       
        </div>
  <div className="experience_filter">
  {/* select institutionUni */}
  <div className='category'> 
      <label htmlFor="yearSelect"> University: </label>
      <select className='selectedlist'
        id="yearSelect"
        onChange={(e) => setselectedUnivesity(e.target.value)}  value={selectedUnivesity.toString()}
              >
        <option value="">All</option>
        {universityOptions.map((institutionUni) => (
          <option key={institutionUni} value={institutionUni}> {institutionUni}
          </option>
        ))}
      </select>
  </div>
  {/* Graduation */}
      <div className='category'>
      <label htmlFor="categorySelect">  Category:</label>
        <select className='selectedlist'
                id="categorySelect"
                onChange={(e) => setSelectedCategory(e.target.value)}   value={selectedCategory}
              >
                <option value="">All</option>
                {categoryOptions.map((obtainedCertificate) => (
                  <option key={obtainedCertificate} value={obtainedCertificate}>  {obtainedCertificate}
                  </option>
                ))}
        </select>
      </div>
      {/* Graduation Years */}
      <div className='category'>
    <label htmlFor="yearSelect">Graduation: </label>
      <select className='selectedlist'
        id="yearSelect"
        onChange={(e) => setSelectedYear(e.target.value)}  value={selectedYear.toString()}
              >
        <option value="">All</option>
        {yearOptions.map((yearOfGraduation) => (
          <option key={yearOfGraduation} value={yearOfGraduation.toString()}> {yearOfGraduation.toString()}
          </option>
        ))}
      </select>
    </div>
        <button className="serachbtn"  onClick={() => handleFilter(data)}>Filter</button>
        <button className="serachbtn" onClick={resetFilters}>Reset All</button>
  </div>
  
      
       
</div>
<div>
<table className="employee-table">
          
          <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              title={`Click to sort`}
              
              onClick={() => handleSort(column.key)}
            >
              {column.label}
              {sortConfig.key === column.key && (
                <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}
          </tr>
        
        <tbody>
        {filteredEmployeeData.map((Employee) => (
     
    
     <tr key={Employee.studentNationalId}>
    
      <td> {Employee.studentNationalId} </td>
       <td>{Employee.studentFullName}</td>
       <td>{Employee.institutionUni}</td>
       <td>{Employee.yearOfGraduation}</td>
       <td>{Employee.obtainedCertificate}</td>
     </tr>
   ))}
        </tbody>
      </table>
</div>

      <ul>
        {filteredEmployeeData.map((Employee) => (
         <div ></div> 
        ))}
        
       <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>   Previous
       </button>
          <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>   Next
        </button>
        {filteredEmployeeData.length === 0 && (
        <p>No Employees matching the filter</p>
          )}
      </ul>
    </div>
  );
}

