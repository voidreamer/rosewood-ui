import { useState } from 'react'
import {
  Button, Card, CardHeader, CardTitle, CardBody, CardFooter,
  Input, TextArea, Select, Toggle, FormGroup,
  H2, Text, Label, Grid, Stack, Flex, useToast,
} from '@rosewood-ui/react'

export function FormPage() {
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast('Form submitted successfully! 🎉', { variant: 'success' })
  }

  return (
    <Stack gap="xl">
      <div>
        <Label>Examples</Label>
        <H2>Forms</H2>
        <Text color="secondary">Example form layouts built with Rosewood UI components.</Text>
      </div>

      <Grid cols={2}>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
            </CardHeader>
            <CardBody>
              <Stack>
                <Grid cols={2}>
                  <FormGroup label="First Name" htmlFor="first">
                    <Input id="first" placeholder="Jane" />
                  </FormGroup>
                  <FormGroup label="Last Name" htmlFor="last">
                    <Input id="last" placeholder="Doe" />
                  </FormGroup>
                </Grid>

                <FormGroup label="Email" htmlFor="email2" hint="We'll never share your email.">
                  <Input id="email2" type="email" placeholder="jane@example.com" />
                </FormGroup>

                <FormGroup label="Password" htmlFor="pass">
                  <Input id="pass" type="password" placeholder="••••••••" />
                </FormGroup>

                <FormGroup label="Role">
                  <Select>
                    <option value="">Select a role...</option>
                    <option>Designer</option>
                    <option>Developer</option>
                    <option>Product Manager</option>
                  </Select>
                </FormGroup>

                <FormGroup label="Bio">
                  <TextArea placeholder="Tell us about yourself..." />
                </FormGroup>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant="ghost" type="reset">Reset</Button>
              <Button type="submit">Create Account</Button>
            </CardFooter>
          </form>
        </Card>

        <Stack>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardBody>
              <Stack>
                <Flex between alignCenter>
                  <div>
                    <Text as="span">Email Notifications</Text>
                    <Text size="sm" color="muted">Receive updates via email</Text>
                  </div>
                  <Toggle active={notifications} onChange={setNotifications} label="Email notifications" />
                </Flex>
                <hr className="rw-divider" />
                <Flex between alignCenter>
                  <div>
                    <Text as="span">Marketing Emails</Text>
                    <Text size="sm" color="muted">Receive promotional content</Text>
                  </div>
                  <Toggle active={marketing} onChange={setMarketing} label="Marketing emails" />
                </Flex>
              </Stack>
            </CardBody>
          </Card>

          <Card variant="accent">
            <CardBody>
              <Stack gap="sm">
                <H2 level={4}>Need help?</H2>
                <Text color="secondary">
                  Check out our documentation or reach out to support. We're here to help you build something beautiful.
                </Text>
                <Flex gap="sm">
                  <Button variant="secondary" size="sm">Documentation</Button>
                  <Button variant="ghost" size="sm">Contact Support</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Stack>
  )
}
