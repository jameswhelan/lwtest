import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Typography,
  Modal,
  ModalCloseButton,
  Alert,
  Tabs,
  Avatar,
  Spinner,
  Tooltip,
  Progress,
  Separator,
  Link,
  Skeleton,
} from "./components";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <header>
          <Typography variant="h1" className="mb-2">
            LendWell Design System
          </Typography>
          <Typography variant="body" color="muted">
            Complete component library for Lovable. Match Figma for pixel-perfect prototypes.
          </Typography>
        </header>

        <section>
          <Typography variant="h2" className="mb-4">Buttons</Typography>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button isLoading>Loading</Button>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Form Inputs</Typography>
          <div className="grid gap-4 max-w-md">
            <Input label="Email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" error="Invalid password" />
            <Input label="With hint" hint="Enter your full name" placeholder="John Doe" />
            <Textarea label="Message" placeholder="Your message..." rows={4} />
            <Select
              label="Country"
              placeholder="Select..."
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "ca", label: "Canada" },
              ]}
            />
            <Checkbox label="I agree to the terms" />
            <RadioGroup
              name="plan"
              label="Select plan"
              options={[
                { value: "basic", label: "Basic" },
                { value: "pro", label: "Pro" },
                { value: "enterprise", label: "Enterprise" },
              ]}
            />
            <Switch label="Enable notifications" checked={switchChecked} onChange={setSwitchChecked} />
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Cards</Typography>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Default card with shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Card content. Use CardFooter for actions.</Typography>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
            <Card variant="outlined" padding="lg">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Bordered style</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-sm">Another variant for different contexts.</Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Badges</Typography>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Alerts</Typography>
          <div className="space-y-4 max-w-md">
            <Alert variant="info" title="Info" onDismiss={() => {}}>
              Your application has been submitted.
            </Alert>
            <Alert variant="success" title="Success">
              Changes saved successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Your session will expire in 5 minutes.
            </Alert>
            <Alert variant="error" title="Error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Tabs</Typography>
          <Tabs
            tabs={[
              { id: "overview", label: "Overview", content: <Typography variant="body">Overview content.</Typography> },
              { id: "details", label: "Details", content: <Typography variant="body">Details content.</Typography> },
              { id: "settings", label: "Settings", content: <Typography variant="body">Settings content.</Typography> },
            ]}
            variant="underline"
          />
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Avatar, Spinner, Tooltip</Typography>
          <div className="flex flex-wrap items-center gap-6">
            <Avatar fallback="JD" size="sm" />
            <Avatar fallback="Jane Doe" size="md" />
            <Avatar fallback="AB" size="lg" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Tooltip content="Helpful hint">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Progress</Typography>
          <div className="space-y-4 max-w-md">
            <Progress value={25} size="sm" />
            <Progress value={50} size="md" showLabel />
            <Progress value={75} size="lg" />
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Separator, Link, Skeleton</Typography>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span>Item 1</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Item 2</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Item 3</span>
            </div>
            <Separator />
            <div className="flex gap-4">
              <Link href="#">Primary link</Link>
              <Link variant="muted" href="#">Muted link</Link>
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Modal</Typography>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Modal title"
            description="Optional description"
            footer={
              <>
                <ModalCloseButton onClose={() => setModalOpen(false)}>Cancel</ModalCloseButton>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </>
            }
          >
            <Typography variant="body">Modal body content goes here.</Typography>
          </Modal>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">Typography</Typography>
          <div className="space-y-2">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="body-lg">Body large</Typography>
            <Typography variant="body">Body text</Typography>
            <Typography variant="body-sm">Body small</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography variant="label">Label</Typography>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
