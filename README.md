
# React Hook Form Kit

**React Hook Form Kit** is a typed, dynamic form component system built with React and `react-hook-form`. It simplifies form creation and validation in React applications by providing reusable, customizable components. Whether you're building simple forms or complex, dynamic form systems, this library provides the tools you need to streamline your workflow and improve developer productivity.

## Features

- **Typed Components**: Fully typed with TypeScript, ensuring type safety and a better developer experience.
- **Dynamic Forms**: Easily create dynamic forms with minimal boilerplate code.
- **Validation**: Seamlessly integrates with `react-hook-form` and supports schema-based validation using libraries like `yup` or `zod`.
- **Customizable**: Extendable and customizable components to fit your design system and application requirements.
- **Lightweight**: Built with performance in mind, leveraging the efficiency of `react-hook-form`.
- **Reusable**: Modular components that can be reused across your application.

## Installation

To get started, install the library along with its peer dependencies:

```bash
npm install react-hook-form-kit react react-dom react-hook-form
```

Or, if you prefer using Yarn:

```bash
yarn add react-hook-form-kit react react-dom react-hook-form
```

## Usage

Here’s a quick example of how to use **React Hook Form Kit** to build a simple form with validation:

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Field, FormField } from "react-hook-form-kit";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
});

export default function App() {
  const methods = useForm({ resolver: yupResolver(schema) });

  const formFields: FormField[] = [
    {
      label: { htmlFor: "name", text: "Name" },
      field: {
        type: Field.Input,
        props: {
          name: "name",
          placeholder: "Enter your name",
        },
      },
    },
    {
      label: { htmlFor: "email", text: "Email" },
      field: {
        type: Field.Input,
        props: {
          name: "email",
          placeholder: "Enter your email",
        },
      },
    },
    {
      field: {
        type: Field.Button,
        props: { type: "submit" },
        text: "Submit",
      },
    },
  ];

  return (
    <Form
      formFields={formFields}
      onSubmit={(data) => console.log("Form submitted", data)}
      methods={methods}
    />
  );
}
```

## Components

### Form

The main wrapper component for your form. It handles form submission and integrates with `react-hook-form`.

### Field

A utility to dynamically render form fields based on their type. Supported field types include:

- `InputField`: A styled input field for text, email, password, etc.
- `ButtonField`: A button for form submission.
- `DivField`: A container for grouping fields.

### Custom Fields

You can extend the library by creating custom fields. For example:

```tsx
export const CustomDatePicker = ({ props }: any) => (
  <input type="date" {...props} />
);
```

## Validation

**React Hook Form Kit** supports schema-based validation using libraries like `yup` or `zod`. Simply pass a resolver to the `useForm` hook to enable validation.

```tsx
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
});

const methods = useForm({ resolver: yupResolver(schema) });
```

## Development

The library includes a development playground for testing and building new features. To start the playground, run:

```bash
npm run dev
```

## Project Structure

The project is organized as follows:

```
├── src/                     # Core source code
│   ├── form/                # Core form components
│   ├── enums/               # Enum definitions
│   ├── hooks/               # Custom hooks
│   ├── plugins/             # Plugin system for custom fields
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
├── LICENSE                  # License file
├── package.json             # Project metadata and scripts
├── README.md                # Documentation
├── tsconfig.json            # TypeScript configuration
├── tsconfig.lib.json        # Library-specific TypeScript configuration
```

## Available Scripts

The following scripts are available in the `package.json`:

- **`npm run build`**: Builds the library for production.
- **`npm run dev`**: Starts the development playground using Vite.
- **`npm run preview`**: Previews the playground build.

## Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This library was created by **[Talha Nazir](https://github.com/talhanr)**. Special thanks to the open-source community and the maintainers of `react-hook-form` for their incredible work.

## Links

- [GitHub Repository](https://github.com/talhanr/react-hook-form-kit)
- [Issues](https://github.com/talhanr/react-hook-form-kit/issues)