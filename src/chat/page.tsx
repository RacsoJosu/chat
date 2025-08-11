import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Copy, Download, ThumbsUp, ThumbsDown, Send } from 'lucide-react'

interface Message {
  role: 'agent' | 'user'
  content: string
  timestamp: string
}

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages] = useState<Message[]>([
    {
      role: 'agent',
      content: 'Hello, I am a generative AI agent. How may I assist you today?',
      timestamp: '4:08:28 PM',
    },
    {
      role: 'user',
      content: "Hi, I'd like to check my bill.",
      timestamp: '4:08:37 PM',
    },
    {
      role: 'agent',
      content:
        "Please hold for a second.\n\nOk, I can help you with that\n\nI'm pulling up your current bill information\n\nYour current bill is $150, and it is due on August 31, 2024.\n\nIf you need more details, feel free to ask!",
      timestamp: '4:08:37 PM',
    },
  ])

  return (
    <div className="flex flex-1 flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="w-full">
              {message.role === 'agent' ? (
                // Agent message - left aligned
                <div className="flex max-w-[80%] gap-2">
                  <div className="bg-primary h-8 w-8 flex-shrink-0 rounded-full" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NexTalk</span>
                      <span className="text-muted-foreground text-sm">{message.timestamp}</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // User message - right aligned
                <div className="flex flex-col items-end">
                  <div className="mb-1 text-right">
                    <span className="mr-2 text-sm font-medium">G5</span>
                    <span className="text-muted-foreground text-sm">{message.timestamp}</span>
                  </div>
                  <div className="max-w-[80%] rounded-lg bg-black p-3 text-white">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-[44px] min-h-[44px] resize-none py-3"
          />
          <Button className="flex h-[44px] items-center gap-2 px-4">
            <Send className="h-4 w-4" />
            <span>Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
