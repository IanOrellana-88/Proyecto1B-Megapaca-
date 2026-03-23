const employeeController = {};

import employeesModel from "../models/employees.js";

//Select

employeeController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);
};

//Insert

employeeController.insertEmployee = async (req, res) => {
    const {name, lastName, salary, DUI, phone, email, password, idBranches} = req.body;
     
    const newEmployee = new employeesModel ({
        name,
        lastName,
        salary,
        DUI,
        phone,
        email,
        password,
        idBranches,
    });

    await newEmployee.save();

    res.json({message: "Employee saved"})
};


//Eliminar

employeeController.deleteEmployee = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({message: "Employee deleted"})
};


//Actulizar
employeeController.updateEmployee = async (req, res) => { 
    const {name, lastName, salary, DUI, phone, email, password, idBranches} = req.body;
    
    await employeesModel.findByIdAndUpdate(
        req.params.id,{
            name,
            lastName,
            salary,
            DUI,
            phone,
            email,
            password,
            idBranches,
        },
        {new: true},
    );
    res.json({message: "Employee updated"});
};

export default employeeController;