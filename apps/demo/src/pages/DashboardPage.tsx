import {
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Badge, Button, Table, H2, Text, Label, Grid, Stack, Flex,
} from '@rosewood-ui/react'

const stats = [
  { label: 'Total Users', value: '12,847', change: '+12%', variant: 'success' as const },
  { label: 'Revenue', value: '$48,290', change: '+8%', variant: 'success' as const },
  { label: 'Active Sessions', value: '1,429', change: '-3%', variant: 'danger' as const },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', variant: 'success' as const },
]

const recentOrders = [
  { id: '#4021', customer: 'Sarah Chen', amount: '$249.00', status: 'Completed' },
  { id: '#4020', customer: 'James Wilson', amount: '$89.00', status: 'Processing' },
  { id: '#4019', customer: 'Maria Garcia', amount: '$432.00', status: 'Completed' },
  { id: '#4018', customer: 'Alex Kumar', amount: '$167.00', status: 'Pending' },
  { id: '#4017', customer: 'Emily Davis', amount: '$523.00', status: 'Completed' },
]

export function DashboardPage() {
  return (
    <Stack gap="xl">
      <div>
        <Label>Overview</Label>
        <H2>Dashboard</H2>
        <Text color="secondary">An example dashboard layout using Rosewood UI components.</Text>
      </div>

      <Grid cols={4}>
        {stats.map((s) => (
          <Card key={s.label}>
            <CardBody>
              <Text size="sm" color="muted">{s.label}</Text>
              <div className="rw-h3" style={{ margin: '4px 0' }}>{s.value}</div>
              <Badge variant={s.variant} size="sm" dot>{s.change}</Badge>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <Grid cols={2}>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardSubtitle>Last 5 transactions</CardSubtitle>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <Table
            variant="compact"
            columns={[
              { key: 'id', title: 'Order' },
              { key: 'customer', title: 'Customer' },
              { key: 'amount', title: 'Amount' },
              {
                key: 'status',
                title: 'Status',
                render: (v) => (
                  <Badge
                    variant={v === 'Completed' ? 'success' : v === 'Processing' ? 'info' : 'warning'}
                    size="sm"
                  >
                    {v}
                  </Badge>
                ),
              },
            ]}
            data={recentOrders}
          />
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Quick Actions</CardTitle>
              <CardSubtitle>Common tasks</CardSubtitle>
            </div>
          </CardHeader>
          <CardBody>
            <Stack gap="sm">
              <Button variant="secondary" block>Create New Order</Button>
              <Button variant="secondary" block>Generate Report</Button>
              <Button variant="secondary" block>Manage Products</Button>
              <Button variant="ghost" block>View Analytics →</Button>
            </Stack>
          </CardBody>
          <CardFooter>
            <Text size="sm" color="muted">Last updated 2 minutes ago</Text>
          </CardFooter>
        </Card>
      </Grid>
    </Stack>
  )
}
