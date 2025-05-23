import { hashedPassword } from "@/lib/password.bcrypt"
import { slugify } from "@/lib/slugify";
import { z } from "zod";

export const modules=[
    {
       id:"5914d9b1-a14b-4b77-a597-454ed6d0cb77",
       name:"Employees", 
    },
    {
        id:"9c67a29f-cb40-4cf5-955a-eafe893251c2",
        name:"Workflow", 
    },
    {
        id:"2578fde9-5270-4fcb-91d9-337b86f8be9e",
        name:"Buildings", 
    },
    {
        id:"b52c77a4-c9c9-422e-bab1-a2cac4f18c83",
        name:"Reports", 
    },
    {
        id:"72477207-3494-48e1-aea5-042d2417e437",
        name:"E-Forms", 
    },
    {
        id:"a459d70d-d5dc-4540-a2a7-2740317e5f1d",
        name:"VIP Management", 
    },
    {
        id:"a8b39d6c-ac96-4353-835c-5f73fb63d8cd",
        name:"Tools", 
    },
    {
        id:"f847a089-f930-4f83-96a8-9d2f466aa272",
        name:"Permission Control", 
    },
    {
        id:"b5b4a1c1-6eb2-41c5-b756-f7bb3b239f1c",
        name:"Settings", 
    }
];

export const permissions=[
    {
        id:"c978cd9f-7570-4b8a-aefc-8f9ff9c089ee",
        name:"View Employees",
        slug:slugify("View Employees"),
        description:"Can view employee records",
        moduleId:modules.filter((module)=>module.name ==="Employees")[0].id
    },
    {
        id:"727ff0e1-cda0-4e9e-a109-2c2c029f8e38",
        name:"Create Employees",
        slug:slugify("Create Employees"),
        description:"Can create new employee records",
        moduleId:modules.filter((module)=>module.name ==="Employees")[0].id
    },
    {
        id:"6a633181-127d-428b-9fb8-c7f8015958b7",
        name:"Edit Employees",
        slug:slugify("Edit Employees"),
        description:"Can edit existing employee records",
        moduleId:modules.filter((module)=>module.name ==="Employees")[0].id
    },
    {
        id:"b42417c6-a939-46c3-8e6c-11a81664e638",
        name:"Delete Employees",
        slug:slugify("Delete Employees"),
        description:"Can delete employee records",
        moduleId:modules.filter((module)=>module.name ==="Employees")[0].id
    },
    {
        id:"7389314e-3902-40e1-abc5-9d5552cd3a3f",
        name:"View Workflow",
        slug:slugify("View Workflow"),
        description:"Can view workflow records",
        moduleId:modules.filter((module)=>module.name ==="Workflow")[0].id
    },
    {
        id:"ba1ca6d4-49c8-4ddd-8ede-3184fd5000d8",
        name:"Manage Workflow",
        slug:slugify("Manage Workflow"),
        description:"Can manage workflow records",
        moduleId:modules.filter((module)=>module.name ==="Workflow")[0].id
    },
    {
        id:"0cb7db08-ee96-4ac9-a4db-97396314e648",
        name:"View Buildings",
        slug:slugify("View Buildings"),
        description:"Can view buildings records",
        moduleId:modules.filter((module)=>module.name ==="Buildings")[0].id
    },
    {
        id:"fb5e8ad0-2d13-4575-b362-5d56ae0752cf",
        name:"Create Buildings",
        slug:slugify("Create Buildings"),
        description:"Can create buildings records and assign occupants",
        moduleId:modules.filter((module)=>module.name ==="Buildings")[0].id
    },
    {
        id:"da47e88d-26f6-40ab-bce6-c8a6d1560491",
        name:"Edit Buildings",
        slug:slugify("Edit Buildings"),
        description:"Can edit existing buildings records",
        moduleId:modules.filter((module)=>module.name ==="Buildings")[0].id
    },
    {
        id:"c82e52e8-cfb7-442f-afc3-de8e60d10b47",
        name:"Delete Buildings",
        slug:slugify("Delete Buildings"),
        description:"Can delete buildings records",
        moduleId:modules.filter((module)=>module.name ==="Buildings")[0].id
    },
    {
        id:"b5668b50-748c-40c8-b590-b2b8e7a0db07",
        name:"View Reports",
        slug:slugify("View Reports"),
        description:"Can view reports",
        moduleId:modules.filter((module)=>module.name ==="Reports")[0].id
    },
    {
        id:"61098f7f-b328-48cc-8f9b-faac3bf16fc7",
        name:"Export Reports",
        slug:slugify("Export Reports"),
        description:"Can export reports to different format",
        moduleId:modules.filter((module)=>module.name ==="Reports")[0].id
    },
    {
        id:"c5426600-ee15-4d1e-b59a-c62e9114ffaa",
        name:"View E-Forms",
        slug:slugify("View E-Forms"),
        description:"Can view e-forms",
        moduleId:modules.filter((module)=>module.name ==="E-Forms")[0].id
    },
    {
        id:"39ee98e8-ad26-4118-9462-7d13298b810d",
        name:"Print E-Forms",
        slug:slugify("Print E-Forms"),
        description:"Can print e-forms",
        moduleId:modules.filter((module)=>module.name ==="E-Forms")[0].id
    },
    {
        id:"173bfd09-0ffe-46ee-b232-22c974a7a706",
        name:"View VIP",
        slug:slugify("View VIP"),
        description:"Can view vip management records",
        moduleId:modules.filter((module)=>module.name ==="VIP Management")[0].id
    },
    {
        id:"2b67b912-a8e7-4c3b-8e21-5c5166aaa7e3",
        name:"Create VIP",
        slug:slugify("Create VIP"),
        description:"Can create vip management records",
        moduleId:modules.filter((module)=>module.name ==="VIP Management")[0].id
    },
    {
        id:"0ba2d7a5-0e78-4512-9fa7-e1672e03aed2",
        name:"Edit VIP",
        slug:slugify("Edit VIP"),
        description:"Can edit existing vip management records",
        moduleId:modules.filter((module)=>module.name ==="VIP Management")[0].id
    },
    {
        id:"639a390a-ec42-41f6-8bcd-06b70adb60a6",
        name:"Delete VIP",
        slug:slugify("Delete VIP"),
        description:"Can delete vip management records",
        moduleId:modules.filter((module)=>module.name ==="VIP Management")[0].id
    },
    {
        id:"df573e00-354c-4df1-a7a6-412a4537c57b",
        name:"View Tools",
        slug:slugify("View Tools"),
        description:"Can view tools",
        moduleId:modules.filter((module)=>module.name ==="Tools")[0].id
    },
    {
        id:"6e4d30cf-9b71-48a6-829d-f001920a76dc",
        name:"Import Tools",
        slug:slugify("Import Tools"),
        description:"Can use tools to import records",
        moduleId:modules.filter((module)=>module.name ==="Tools")[0].id
    },
    {
        id:"8b498d6e-481a-4a9d-b5b9-333413cf987e",
        name:"Export Tools",
        slug:slugify("Export Tools"),
        description:"Can use tools to export records",
        moduleId:modules.filter((module)=>module.name ==="Tools")[0].id
    },
    {
        id:"02fc6d86-24d9-4801-a25a-56962667163d",
        name:"View Users",
        slug:slugify("View Users"),
        description:"Can view user accounts",
        moduleId:modules.filter((module)=>module.name ==="Permission Control")[0].id
    },
    {
        id:"ace65a55-796a-4a20-a5f6-40c3aff8c827",
        name:"Manage Users",
        slug:slugify("Manage Users"),
        description:"Can manage user accounts",
        moduleId:modules.filter((module)=>module.name ==="Permission Control")[0].id
    },
    {
        id:"031ef143-07a2-409b-8b05-79c346be59d4",
        name:"Manage Roles",
        slug:slugify("Manage Roles"),
        description:"Can create and modify roles",
        moduleId:modules.filter((module)=>module.name ==="Permission Control")[0].id
    },
    {
        id:"b0363555-0c86-4ee0-bb8d-78659ba6d10a",
        name:"View Settings",
        slug:slugify("View Settings"),
        description:"Can view system settings",
        moduleId:modules.filter((module)=>module.name ==="Settings")[0].id
    },
    {
        id:"acda2d76-1f67-4f7c-a4cb-a59d0bf38bca",
        name:"Manage Settings",
        slug:slugify("Manage Settings"),
        description:"Can manage and change system settings",
        moduleId:modules.filter((module)=>module.name ==="Settings")[0].id
    }
]

export const roles = [
   {
        id:"e2eb7bda-680b-49d4-b30f-d4564adcecaf",
        name:"Adminstrator",
        description:"Can access all feature of system."
    },
    {
        id:"38e299e5-724e-4104-bffa-c91b2d5a6f19",
        name:"HR Manager",
        description:"Can manage employees and view reports."
    },
    {
        id:"fdb4f1d1-f636-4f91-8745-ced71d6ae6ef",
        name:"HR Assistant",
        description:"Can view and edit employees, view reports."
    },
    {
        id:"7da958a8-4851-4706-92e8-3e781c326c35",
        name:"HR Assistant",
        description:"Can view and edit employees, view reports."
    },
    {
        id:"6d64f944-63f4-415c-9916-40e0087e9644s",
        name:"Viewer",
        description:"Read-only access to employees and reports."
    }
];

export const userStatus = z.enum(["Active", "Pending"]);

export const user=
    {
        fullName:"Admin System",
        email:"admin@system.com",
        password:"admin@123",
        roleId:roles.filter((role)=>role.name === "Adminstrator")[0].id,
        status:userStatus["Active"]
    }
;

export const rolePermissions = permissions.map((permission)=>(
    {
        roleId:roles.filter((role)=>role.name === "Adminstrator")[0].id,
        permissionId:permission.id,
        assignedBy:user.fullName
    }
));
