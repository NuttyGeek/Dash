import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import { Button } from "../components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog";
import { Input } from "../components/input";
import { Label } from "../components/label";
import * as Yup from "yup";
import { Pencil, Plus, Trash } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/select";
import { FieldOptions } from "../lib/models";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";

const createSchemaValidationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  fields: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Name is Required"),
      type: Yup.string().required("Type of Field is Required"),
    })
  ),
});

export const SchemaListPage = () => {
  const formik = useFormik({
    initialValues: { name: "", fields: [{ name: "", type: "" }] },
    onSubmit: (form) => {
      console.log(":: form", form);
    },
    validationSchema: createSchemaValidationSchema,
  });

  useEffect(() => {
    console.log(":: value", formik.values);
    console.log(":: error", formik?.errors);
  }, [formik]);

  const addSchemaForm = () => {
    return (
      <>
        <DialogHeader>
          <DialogTitle>Add Schema</DialogTitle>
          <DialogDescription>Create Schema Structure</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor={"name"}>Name of Schema</Label>
            <Input
              id={"name"}
              name={"name"}
              value={formik?.values?.name}
              onChange={formik.handleChange}
              placeholder={"Name of Schema"}
            />
            <span className="text-xs text-red-500">{formik?.errors?.name}</span>
          </div>
          <div className="text-bold text-lg mt-4">Fields</div>
          <div className={"w-full"}>
            {formik?.values?.fields?.map((field, index) => {
              return (
                <div key={`field-row-${index}`}>
                  <div className="flex gap-2 items-start mt-2">
                    <div className="flex-1">
                      <Label>Name</Label>
                      <Input
                        name={`fields[${index}].name`}
                        value={formik?.values?.fields[index]?.name}
                        onChange={formik.handleChange}
                        placeholder="Name of Field"
                      />
                      <span className="text-xs text-red-500">
                        {(formik?.errors?.fields?.[index] as any)?.name ?? ""}
                      </span>
                    </div>
                    <div className="flex-1">
                      <Label>Type</Label>
                      <Select
                        name={`fields[${index}].type`}
                        onValueChange={(value) =>
                          formik.setFieldValue(`fields[${index}].type`, value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.keys(FieldOptions).map((key) => (
                              <SelectItem key={key} value={key}>
                                {key}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span className="text-xs text-red-500">
                        {(formik?.errors?.fields?.[index] as any)?.type ?? ""}
                      </span>
                    </div>
                    <div className="pt-6">
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            variant={"destructive"}
                            onClick={() => {
                              const fields = formik?.values?.fields;
                              fields?.splice(index, 1);
                              formik?.setFieldValue("fields", fields);
                            }}
                          >
                            <Trash className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <div className="mt-2">
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    formik.setFieldValue("fields", [
                      ...formik.values.fields,
                      { name: "", type: "" },
                    ])
                  }
                >
                  <Plus className="h-5 w-5"></Plus>
                  Add Field
                </Button>
              </div>
            </div>
             ̰
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => formik?.handleSubmit()}>
            Create Schema
          </Button>
        </DialogFooter>
      </>
    );
  };

  const schemaTable = () => {
    return (
      <>
        <Table>
          <TableCaption>List of Schemas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">UID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Fields</TableHead>
              <TableHead className="w-[300px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-left">INV001</TableCell>
              <TableCell className="text-left">Article</TableCell>
              <TableCell className="text-left">Credit Card</TableCell>
              <TableCell className="text-left">
                <Tooltip>
                  <TooltipTrigger>
                    {/* <Button variant={"secondary"}> */}
                      <Pencil className="w-8 h-8 rounded-md m-2 p-2 hover:bg-gray-200" />
                    {/* </Button> */}
                  </TooltipTrigger>
                  <TooltipContent>Edit Schema</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    {/* <Button variant={"secondary"}> */}
                      <Trash className="w-8 h-8 m-2 p-2 hover:bg-gray-200" />
                    {/* </Button> */}
                  </TooltipTrigger>
                  <TooltipContent>Delete Schema</TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  };

  return (
    <>
      <div className="flex w-full gap-2 justify-between items-center">
        <h1 className="text-lg font-bold">Schema List</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Schema</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[1000px]">
            {addSchemaForm()}
          </DialogContent>
        </Dialog>
      </div>
      <div>{schemaTable()}</div>
    </>
  );
};
