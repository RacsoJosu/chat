import { Button } from '@/components/ui/button'
import PanelCard, {
  PanelCardContent,
  PanelCardFooter,
  PanelCardHeader,
  PanelCardHeaderTitle,
} from '@/shared/components/panel-card'

export function ContacDetails() {
  return (
    <PanelCard>
      <PanelCardHeader>
        <PanelCardHeaderTitle>Contact Details</PanelCardHeaderTitle>
      </PanelCardHeader>
      <PanelCardContent>
        <div className="flex flex-col items-center border-b pb-6">
          <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
            G5
          </div>
          <h3 className="text-lg font-semibold">G5 Customer</h3>
          <p className="text-muted-foreground text-sm">Premium Account</p>
          <div className="mt-1 flex items-center">
            <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-muted-foreground text-xs">Online</span>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Email:</span>
                <span>customer@g5.com</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phone:</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Customer ID:</span>
                <span>G5-12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Account Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plan:</span>
                <span>Premium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Member since:</span>
                <span>Jan 2023</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last bill:</span>
                <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>
      </PanelCardContent>
      <PanelCardFooter>
        <Button variant="outline" size="sm" className="w-full">
          View full profile
        </Button>
      </PanelCardFooter>
    </PanelCard>
  )
}

export default ContacDetails
