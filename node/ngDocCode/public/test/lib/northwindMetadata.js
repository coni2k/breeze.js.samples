window.ash.northwindMetadata = JSON.stringify({"schema":{"namespace":"Northwind.Models","alias":"Self","annotation:UseStrongSpatialTypes":"false","xmlns:annotation":"http://schemas.microsoft.com/ado/2009/02/edm/annotation","xmlns":"http://schemas.microsoft.com/ado/2009/11/edm","cSpaceOSpaceMapping":"[[\"Northwind.Models.Location\",\"Northwind.Models.Location\"],[\"Northwind.Models.Category\",\"Northwind.Models.Category\"],[\"Northwind.Models.Customer\",\"Northwind.Models.Customer\"],[\"Northwind.Models.Order\",\"Northwind.Models.Order\"],[\"Northwind.Models.Employee\",\"Northwind.Models.Employee\"],[\"Northwind.Models.EmployeeTerritory\",\"Northwind.Models.EmployeeTerritory\"],[\"Northwind.Models.Territory\",\"Northwind.Models.Territory\"],[\"Northwind.Models.Region\",\"Northwind.Models.Region\"],[\"Northwind.Models.OrderDetail\",\"Northwind.Models.OrderDetail\"],[\"Northwind.Models.Product\",\"Northwind.Models.Product\"],[\"Northwind.Models.Supplier\",\"Northwind.Models.Supplier\"],[\"Northwind.Models.InternationalOrder\",\"Northwind.Models.InternationalOrder\"],[\"Northwind.Models.PreviousEmployee\",\"Northwind.Models.PreviousEmployee\"],[\"Northwind.Models.Role\",\"Northwind.Models.Role\"],[\"Northwind.Models.UserRole\",\"Northwind.Models.UserRole\"],[\"Northwind.Models.User\",\"Northwind.Models.User\"]]","complexType":{"name":"Location","property":[{"name":"Address","type":"Edm.String","maxLength":"60","fixedLength":"false","unicode":"true"},{"name":"City","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"Region","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"PostalCode","type":"Edm.String","maxLength":"10","fixedLength":"false","unicode":"true"},{"name":"Country","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"}]},"entityType":[{"name":"Category","key":{"propertyRef":{"name":"CategoryID"}},"property":[{"name":"CategoryID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"CategoryName","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"Description","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"Picture","type":"Edm.Binary","maxLength":"4000","fixedLength":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}]},{"name":"Customer","key":{"propertyRef":{"name":"CustomerID"}},"property":[{"name":"CustomerID","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"CompanyName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"ContactName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"ContactTitle","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"Address","type":"Edm.String","maxLength":"60","fixedLength":"false","unicode":"true"},{"name":"City","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"Region","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"PostalCode","type":"Edm.String","maxLength":"10","fixedLength":"false","unicode":"true"},{"name":"Country","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"Phone","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"Fax","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"RowVersion","type":"Edm.Int32","concurrencyMode":"Fixed"}],"navigationProperty":{"name":"Orders","relationship":"Self.Order_Customer","fromRole":"Order_Customer_Target","toRole":"Order_Customer_Source"}},{"name":"Order","key":{"propertyRef":{"name":"OrderID"}},"property":[{"name":"OrderID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"CustomerID","type":"Edm.Guid"},{"name":"EmployeeID","type":"Edm.Int32"},{"name":"OrderDate","type":"Edm.DateTime"},{"name":"RequiredDate","type":"Edm.DateTime"},{"name":"ShippedDate","type":"Edm.DateTime"},{"name":"Freight","type":"Edm.Decimal","precision":"18","scale":"2"},{"name":"ShipName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true"},{"name":"ShipTo","type":"Edm.Self.Location","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Customer","relationship":"Self.Order_Customer","fromRole":"Order_Customer_Source","toRole":"Order_Customer_Target"},{"name":"Employee","relationship":"Self.Employee_Orders","fromRole":"Employee_Orders_Target","toRole":"Employee_Orders_Source"},{"name":"OrderDetails","relationship":"Self.OrderDetail_Order","fromRole":"OrderDetail_Order_Target","toRole":"OrderDetail_Order_Source"}]},{"name":"Employee","key":{"propertyRef":{"name":"EmployeeID"}},"property":[{"name":"EmployeeID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"LastName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"FirstName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"Title","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"TitleOfCourtesy","type":"Edm.String","maxLength":"25","fixedLength":"false","unicode":"true"},{"name":"BirthDate","type":"Edm.DateTime"},{"name":"HireDate","type":"Edm.DateTime"},{"name":"Address","type":"Edm.String","maxLength":"60","fixedLength":"false","unicode":"true"},{"name":"City","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"Region","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"PostalCode","type":"Edm.String","maxLength":"10","fixedLength":"false","unicode":"true"},{"name":"Country","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"HomePhone","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"Extension","type":"Edm.String","maxLength":"4","fixedLength":"false","unicode":"true"},{"name":"Photo","type":"Edm.Binary","maxLength":"4000","fixedLength":"false"},{"name":"Notes","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"PhotoPath","type":"Edm.String","maxLength":"255","fixedLength":"false","unicode":"true"},{"name":"ReportsToEmployeeID","type":"Edm.Int32"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"DirectReports","relationship":"Self.Employee_DirectReports","fromRole":"Employee_DirectReports_Source","toRole":"Employee_DirectReports_Target"},{"name":"EmployeeTerritories","relationship":"Self.Employee_EmployeeTerritories","fromRole":"Employee_EmployeeTerritories_Source","toRole":"Employee_EmployeeTerritories_Target"},{"name":"Manager","relationship":"Self.Employee_DirectReports","fromRole":"Employee_DirectReports_Target","toRole":"Employee_DirectReports_Source"},{"name":"Orders","relationship":"Self.Employee_Orders","fromRole":"Employee_Orders_Source","toRole":"Employee_Orders_Target"},{"name":"Territories","relationship":"Self.Employee_Territories","fromRole":"Employee_Territories_Source","toRole":"Employee_Territories_Target"}]},{"name":"EmployeeTerritory","key":{"propertyRef":{"name":"ID"}},"property":[{"name":"ID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"EmpID","type":"Edm.Int32","nullable":"false"},{"name":"TerritoryID","type":"Edm.Int32","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":{"name":"Territory","relationship":"Self.EmployeeTerritory_Territory","fromRole":"EmployeeTerritory_Territory_Source","toRole":"EmployeeTerritory_Territory_Target"}},{"name":"Territory","key":{"propertyRef":{"name":"TerritoryID"}},"property":[{"name":"TerritoryID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"TerritoryDescription","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"RegionID","type":"Edm.Int32","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Employees","relationship":"Self.Employee_Territories","fromRole":"Employee_Territories_Target","toRole":"Employee_Territories_Source"},{"name":"EmployeeTerritories","relationship":"Self.EmployeeTerritory_Territory","fromRole":"EmployeeTerritory_Territory_Target","toRole":"EmployeeTerritory_Territory_Source"},{"name":"Region","relationship":"Self.Region_Territories","fromRole":"Region_Territories_Target","toRole":"Region_Territories_Source"}]},{"name":"Region","key":{"propertyRef":{"name":"RegionID"}},"property":[{"name":"RegionID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"RegionDescription","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":{"name":"Territories","relationship":"Self.Region_Territories","fromRole":"Region_Territories_Source","toRole":"Region_Territories_Target"}},{"name":"OrderDetail","key":{"propertyRef":[{"name":"OrderID"},{"name":"ProductID"}]},"property":[{"name":"OrderID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"ProductID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"UnitPrice","type":"Edm.Decimal","precision":"18","scale":"2","nullable":"false"},{"name":"Quantity","type":"Edm.Int16","nullable":"false"},{"name":"Discount","type":"Edm.Single","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Order","relationship":"Self.OrderDetail_Order","fromRole":"OrderDetail_Order_Source","toRole":"OrderDetail_Order_Target"},{"name":"Product","relationship":"Self.OrderDetail_Product","fromRole":"OrderDetail_Product_Source","toRole":"OrderDetail_Product_Target"}]},{"name":"Product","key":{"propertyRef":{"name":"ProductID"}},"property":[{"name":"ProductID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"ProductName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true"},{"name":"SupplierID","type":"Edm.Int32"},{"name":"CategoryID","type":"Edm.Int32"},{"name":"QuantityPerUnit","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"UnitPrice","type":"Edm.Decimal","precision":"18","scale":"2"},{"name":"UnitsInStock","type":"Edm.Int16"},{"name":"UnitsOnOrder","type":"Edm.Int16"},{"name":"ReorderLevel","type":"Edm.Int16"},{"name":"Discontinued","type":"Edm.Boolean","nullable":"false"},{"name":"DiscontinuedDate","type":"Edm.DateTime"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Category","relationship":"Self.Product_Category","fromRole":"Product_Category_Source","toRole":"Product_Category_Target"},{"name":"Supplier","relationship":"Self.Supplier_Products","fromRole":"Supplier_Products_Target","toRole":"Supplier_Products_Source"}]},{"name":"Supplier","key":{"propertyRef":{"name":"SupplierID"}},"property":[{"name":"SupplierID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"CompanyName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"ContactName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"ContactTitle","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"Location","type":"Edm.Self.Location","nullable":"false"},{"name":"Phone","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"Fax","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"HomePage","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":{"name":"Products","relationship":"Self.Supplier_Products","fromRole":"Supplier_Products_Source","toRole":"Supplier_Products_Target"}},{"name":"InternationalOrder","baseType":"Self.Order","property":[{"name":"CustomsDescription","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"ExciseTax","type":"Edm.Decimal","precision":"18","scale":"2","nullable":"false"}]},{"name":"PreviousEmployee","key":{"propertyRef":{"name":"EmployeeID"}},"property":[{"name":"EmployeeID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"LastName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"FirstName","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"Title","type":"Edm.String","maxLength":"30","fixedLength":"false","unicode":"true"},{"name":"TitleOfCourtesy","type":"Edm.String","maxLength":"25","fixedLength":"false","unicode":"true"},{"name":"BirthDate","type":"Edm.DateTime"},{"name":"HireDate","type":"Edm.DateTime"},{"name":"Address","type":"Edm.String","maxLength":"60","fixedLength":"false","unicode":"true"},{"name":"City","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"Region","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"PostalCode","type":"Edm.String","maxLength":"10","fixedLength":"false","unicode":"true"},{"name":"Country","type":"Edm.String","maxLength":"15","fixedLength":"false","unicode":"true"},{"name":"HomePhone","type":"Edm.String","maxLength":"24","fixedLength":"false","unicode":"true"},{"name":"Extension","type":"Edm.String","maxLength":"4","fixedLength":"false","unicode":"true"},{"name":"Photo","type":"Edm.Binary","maxLength":"4000","fixedLength":"false"},{"name":"Notes","type":"Edm.String","maxLength":"4000","fixedLength":"false","unicode":"true"},{"name":"PhotoPath","type":"Edm.String","maxLength":"255","fixedLength":"false","unicode":"true"},{"name":"ReportsToEmployeeID","type":"Edm.Int32"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}]},{"name":"Role","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Int64","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"Name","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"Description","type":"Edm.String","maxLength":"2000","fixedLength":"false","unicode":"true"}],"navigationProperty":{"name":"UserRoles","relationship":"Self.Role_UserRoles","fromRole":"Role_UserRoles_Source","toRole":"Role_UserRoles_Target"}},{"name":"UserRole","key":{"propertyRef":{"name":"ID"}},"property":[{"name":"ID","type":"Edm.Int64","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"UserId","type":"Edm.Int64","nullable":"false"},{"name":"RoleId","type":"Edm.Int64","nullable":"false"}],"navigationProperty":[{"name":"Role","relationship":"Self.Role_UserRoles","fromRole":"Role_UserRoles_Target","toRole":"Role_UserRoles_Source"},{"name":"User","relationship":"Self.UserRole_User","fromRole":"UserRole_User_Source","toRole":"UserRole_User_Target"}]},{"name":"User","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Int64","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"UserName","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"UserPassword","type":"Edm.String","maxLength":"200","fixedLength":"false","unicode":"true"},{"name":"FirstName","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"LastName","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"Email","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"RowVersion","type":"Edm.Decimal","precision":"18","scale":"2","nullable":"false"},{"name":"CreatedBy","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"CreatedByUserId","type":"Edm.Int64","nullable":"false"},{"name":"CreatedDate","type":"Edm.DateTime","nullable":"false"},{"name":"ModifiedBy","type":"Edm.String","maxLength":"100","fixedLength":"false","unicode":"true"},{"name":"ModifiedByUserId","type":"Edm.Int64","nullable":"false"},{"name":"ModifiedDate","type":"Edm.DateTime","concurrencyMode":"Fixed","nullable":"false"}],"navigationProperty":{"name":"UserRoles","relationship":"Self.UserRole_User","fromRole":"UserRole_User_Target","toRole":"UserRole_User_Source"}}],"association":[{"name":"Order_Customer","end":[{"role":"Order_Customer_Source","type":"Edm.Self.Order","multiplicity":"*"},{"role":"Order_Customer_Target","type":"Edm.Self.Customer","multiplicity":"0..1"}],"referentialConstraint":{"principal":{"role":"Order_Customer_Target","propertyRef":{"name":"CustomerID"}},"dependent":{"role":"Order_Customer_Source","propertyRef":{"name":"CustomerID"}}}},{"name":"Employee_DirectReports","end":[{"role":"Employee_DirectReports_Source","type":"Edm.Self.Employee","multiplicity":"0..1"},{"role":"Employee_DirectReports_Target","type":"Edm.Self.Employee","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Employee_DirectReports_Source","propertyRef":{"name":"EmployeeID"}},"dependent":{"role":"Employee_DirectReports_Target","propertyRef":{"name":"ReportsToEmployeeID"}}}},{"name":"Region_Territories","end":[{"role":"Region_Territories_Source","type":"Edm.Self.Region","multiplicity":"1","onDelete":{"action":"Cascade"}},{"role":"Region_Territories_Target","type":"Edm.Self.Territory","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Region_Territories_Source","propertyRef":{"name":"RegionID"}},"dependent":{"role":"Region_Territories_Target","propertyRef":{"name":"RegionID"}}}},{"name":"EmployeeTerritory_Territory","end":[{"role":"EmployeeTerritory_Territory_Source","type":"Edm.Self.EmployeeTerritory","multiplicity":"*"},{"role":"EmployeeTerritory_Territory_Target","type":"Edm.Self.Territory","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"EmployeeTerritory_Territory_Target","propertyRef":{"name":"TerritoryID"}},"dependent":{"role":"EmployeeTerritory_Territory_Source","propertyRef":{"name":"TerritoryID"}}}},{"name":"Employee_EmployeeTerritories","end":[{"role":"Employee_EmployeeTerritories_Source","type":"Edm.Self.Employee","multiplicity":"1","onDelete":{"action":"Cascade"}},{"role":"Employee_EmployeeTerritories_Target","type":"Edm.Self.EmployeeTerritory","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Employee_EmployeeTerritories_Source","propertyRef":{"name":"EmployeeID"}},"dependent":{"role":"Employee_EmployeeTerritories_Target","propertyRef":{"name":"EmpID"}}}},{"name":"Employee_Orders","end":[{"role":"Employee_Orders_Source","type":"Edm.Self.Employee","multiplicity":"0..1"},{"role":"Employee_Orders_Target","type":"Edm.Self.Order","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Employee_Orders_Source","propertyRef":{"name":"EmployeeID"}},"dependent":{"role":"Employee_Orders_Target","propertyRef":{"name":"EmployeeID"}}}},{"name":"Employee_Territories","end":[{"role":"Employee_Territories_Source","type":"Edm.Self.Employee","multiplicity":"*"},{"role":"Employee_Territories_Target","type":"Edm.Self.Territory","multiplicity":"*"}]},{"name":"OrderDetail_Order","end":[{"role":"OrderDetail_Order_Source","type":"Edm.Self.OrderDetail","multiplicity":"*"},{"role":"OrderDetail_Order_Target","type":"Edm.Self.Order","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"OrderDetail_Order_Target","propertyRef":{"name":"OrderID"}},"dependent":{"role":"OrderDetail_Order_Source","propertyRef":{"name":"OrderID"}}}},{"name":"Product_Category","end":[{"role":"Product_Category_Source","type":"Edm.Self.Product","multiplicity":"*"},{"role":"Product_Category_Target","type":"Edm.Self.Category","multiplicity":"0..1"}],"referentialConstraint":{"principal":{"role":"Product_Category_Target","propertyRef":{"name":"CategoryID"}},"dependent":{"role":"Product_Category_Source","propertyRef":{"name":"CategoryID"}}}},{"name":"Supplier_Products","end":[{"role":"Supplier_Products_Source","type":"Edm.Self.Supplier","multiplicity":"0..1"},{"role":"Supplier_Products_Target","type":"Edm.Self.Product","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Supplier_Products_Source","propertyRef":{"name":"SupplierID"}},"dependent":{"role":"Supplier_Products_Target","propertyRef":{"name":"SupplierID"}}}},{"name":"OrderDetail_Product","end":[{"role":"OrderDetail_Product_Source","type":"Edm.Self.OrderDetail","multiplicity":"*"},{"role":"OrderDetail_Product_Target","type":"Edm.Self.Product","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"OrderDetail_Product_Target","propertyRef":{"name":"ProductID"}},"dependent":{"role":"OrderDetail_Product_Source","propertyRef":{"name":"ProductID"}}}},{"name":"UserRole_User","end":[{"role":"UserRole_User_Source","type":"Edm.Self.UserRole","multiplicity":"*"},{"role":"UserRole_User_Target","type":"Edm.Self.User","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"UserRole_User_Target","propertyRef":{"name":"Id"}},"dependent":{"role":"UserRole_User_Source","propertyRef":{"name":"UserId"}}}},{"name":"Role_UserRoles","end":[{"role":"Role_UserRoles_Source","type":"Edm.Self.Role","multiplicity":"1","onDelete":{"action":"Cascade"}},{"role":"Role_UserRoles_Target","type":"Edm.Self.UserRole","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Role_UserRoles_Source","propertyRef":{"name":"Id"}},"dependent":{"role":"Role_UserRoles_Target","propertyRef":{"name":"RoleId"}}}}],"entityContainer":{"name":"NorthwindMetadataContext","entitySet":[{"name":"Categories","entityType":"Self.Category"},{"name":"Customers","entityType":"Self.Customer"},{"name":"Orders","entityType":"Self.Order"},{"name":"Employees","entityType":"Self.Employee"},{"name":"EmployeeTerritories","entityType":"Self.EmployeeTerritory"},{"name":"Territories","entityType":"Self.Territory"},{"name":"Regions","entityType":"Self.Region"},{"name":"OrderDetails","entityType":"Self.OrderDetail"},{"name":"Products","entityType":"Self.Product"},{"name":"Suppliers","entityType":"Self.Supplier"},{"name":"PreviousEmployees","entityType":"Self.PreviousEmployee"},{"name":"Roles","entityType":"Self.Role"},{"name":"UserRoles","entityType":"Self.UserRole"},{"name":"Users","entityType":"Self.User"}],"associationSet":[{"name":"Order_Customer","association":"Self.Order_Customer","end":[{"role":"Order_Customer_Source","entitySet":"Orders"},{"role":"Order_Customer_Target","entitySet":"Customers"}]},{"name":"Employee_DirectReports","association":"Self.Employee_DirectReports","end":[{"role":"Employee_DirectReports_Source","entitySet":"Employees"},{"role":"Employee_DirectReports_Target","entitySet":"Employees"}]},{"name":"Region_Territories","association":"Self.Region_Territories","end":[{"role":"Region_Territories_Source","entitySet":"Regions"},{"role":"Region_Territories_Target","entitySet":"Territories"}]},{"name":"EmployeeTerritory_Territory","association":"Self.EmployeeTerritory_Territory","end":[{"role":"EmployeeTerritory_Territory_Source","entitySet":"EmployeeTerritories"},{"role":"EmployeeTerritory_Territory_Target","entitySet":"Territories"}]},{"name":"Employee_EmployeeTerritories","association":"Self.Employee_EmployeeTerritories","end":[{"role":"Employee_EmployeeTerritories_Source","entitySet":"Employees"},{"role":"Employee_EmployeeTerritories_Target","entitySet":"EmployeeTerritories"}]},{"name":"Employee_Orders","association":"Self.Employee_Orders","end":[{"role":"Employee_Orders_Source","entitySet":"Employees"},{"role":"Employee_Orders_Target","entitySet":"Orders"}]},{"name":"Employee_Territories","association":"Self.Employee_Territories","end":[{"role":"Employee_Territories_Source","entitySet":"Employees"},{"role":"Employee_Territories_Target","entitySet":"Territories"}]},{"name":"OrderDetail_Order","association":"Self.OrderDetail_Order","end":[{"role":"OrderDetail_Order_Source","entitySet":"OrderDetails"},{"role":"OrderDetail_Order_Target","entitySet":"Orders"}]},{"name":"Product_Category","association":"Self.Product_Category","end":[{"role":"Product_Category_Source","entitySet":"Products"},{"role":"Product_Category_Target","entitySet":"Categories"}]},{"name":"Supplier_Products","association":"Self.Supplier_Products","end":[{"role":"Supplier_Products_Source","entitySet":"Suppliers"},{"role":"Supplier_Products_Target","entitySet":"Products"}]},{"name":"OrderDetail_Product","association":"Self.OrderDetail_Product","end":[{"role":"OrderDetail_Product_Source","entitySet":"OrderDetails"},{"role":"OrderDetail_Product_Target","entitySet":"Products"}]},{"name":"UserRole_User","association":"Self.UserRole_User","end":[{"role":"UserRole_User_Source","entitySet":"UserRoles"},{"role":"UserRole_User_Target","entitySet":"Users"}]},{"name":"Role_UserRoles","association":"Self.Role_UserRoles","end":[{"role":"Role_UserRoles_Source","entitySet":"Roles"},{"role":"Role_UserRoles_Target","entitySet":"UserRoles"}]}]}}});
