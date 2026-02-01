import { useState } from 'react'
import {
  Button, Card, CardHeader, CardTitle, CardBody,
  Badge, Toggle, Input, TextArea, Select, FormGroup,
  Modal, Tabs, Table, H2, H3, Text, Label, Code,
  Grid, Stack, Flex, useModal, useToast,
} from '@rosewood-ui/react'

export function PlaygroundPage() {
  const [toggleOn, setToggleOn] = useState(false)
  const [activeTab, setActiveTab] = useState('buttons')
  const modal = useModal()
  const toast = useToast()

  return (
    <Stack gap="xl">
      <div>
        <Label>Component Library</Label>
        <H2>Playground</H2>
        <Text color="secondary">Interactive showcase of every Rosewood UI React component.</Text>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          { key: 'buttons', label: 'Buttons' },
          { key: 'inputs', label: 'Inputs' },
          { key: 'data', label: 'Data Display' },
          { key: 'feedback', label: 'Feedback' },
        ]}
      />

      {activeTab === 'buttons' && (
        <Stack>
          <H3>Buttons</H3>
          <Flex gap="sm" wrap>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="accent-outline">Accent Outline</Button>
          </Flex>

          <H3>Sizes</H3>
          <Flex gap="sm" alignCenter>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Flex>

          <H3>States</H3>
          <Flex gap="sm" wrap>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button pill>Pill Shape</Button>
          </Flex>
        </Stack>
      )}

      {activeTab === 'inputs' && (
        <Stack>
          <H3>Form Elements</H3>
          <Grid cols={2}>
            <FormGroup label="Name" htmlFor="name">
              <Input id="name" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup label="Email" htmlFor="email" error="Invalid email">
              <Input id="email" type="email" placeholder="you@example.com" error />
            </FormGroup>
          </Grid>

          <FormGroup label="Message">
            <TextArea placeholder="Write something warm..." />
          </FormGroup>

          <FormGroup label="Role">
            <Select>
              <option>Designer</option>
              <option>Developer</option>
              <option>Manager</option>
            </Select>
          </FormGroup>

          <Flex gap="md" alignCenter>
            <Text as="span" color="secondary">Dark mode</Text>
            <Toggle active={toggleOn} onChange={setToggleOn} label="Toggle example" />
          </Flex>
        </Stack>
      )}

      {activeTab === 'data' && (
        <Stack>
          <H3>Badges</H3>
          <Flex gap="sm" wrap>
            <Badge>Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="info">Info</Badge>
          </Flex>

          <H3>Cards</H3>
          <Grid cols={3}>
            <Card>
              <CardHeader><CardTitle>Default</CardTitle></CardHeader>
              <CardBody>A basic card with content.</CardBody>
            </Card>
            <Card variant="elevated">
              <CardHeader><CardTitle>Elevated</CardTitle></CardHeader>
              <CardBody>Stronger shadow, no border.</CardBody>
            </Card>
            <Card variant="interactive" onClick={() => toast('Card clicked!', { variant: 'info' })}>
              <CardHeader><CardTitle>Interactive</CardTitle></CardHeader>
              <CardBody>Click me!</CardBody>
            </Card>
          </Grid>

          <H3>Table</H3>
          <Table
            wrapped
            columns={[
              { key: 'name', title: 'Name' },
              { key: 'role', title: 'Role' },
              { key: 'status', title: 'Status', render: (v) => <Badge variant={v === 'Active' ? 'success' : 'warning'} size="sm" dot>{v}</Badge> },
            ]}
            data={[
              { name: 'Alice', role: 'Designer', status: 'Active' },
              { name: 'Bob', role: 'Developer', status: 'Active' },
              { name: 'Charlie', role: 'Manager', status: 'Away' },
            ]}
          />

          <H3>Code</H3>
          <Code block>{`import { Button } from '@rosewood-ui/react'\nimport '@rosewood-ui/css'`}</Code>
        </Stack>
      )}

      {activeTab === 'feedback' && (
        <Stack>
          <H3>Modal</H3>
          <Button onClick={modal.open}>Open Modal</Button>
          <Modal
            open={modal.isOpen}
            onClose={modal.close}
            title="Hello from Rosewood 🌹"
            footer={
              <>
                <Button variant="ghost" onClick={modal.close}>Cancel</Button>
                <Button onClick={modal.close}>Confirm</Button>
              </>
            }
          >
            <Text color="secondary">This is a modal dialog with keyboard support. Press Escape or click outside to close.</Text>
          </Modal>

          <H3>Toast</H3>
          <Flex gap="sm" wrap>
            <Button variant="secondary" onClick={() => toast('Hello! 👋')}>Default Toast</Button>
            <Button variant="secondary" onClick={() => toast('Saved successfully!', { variant: 'success' })}>Success</Button>
            <Button variant="secondary" onClick={() => toast('Something went wrong', { variant: 'danger' })}>Error</Button>
            <Button variant="secondary" onClick={() => toast('Heads up!', { variant: 'warning' })}>Warning</Button>
          </Flex>
        </Stack>
      )}
    </Stack>
  )
}
