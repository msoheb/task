import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters",
  }),
});

function TaskCreate({ addTask }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  const handleSubmit = (value) => {
    addTask(value.task);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input placeholder="Plan your day" {...field} />
              </FormControl>
              <FormDescription>Add a Task!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default TaskCreate;
