"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "~/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Switch } from "~/components/ui/switch"
import { motion } from 'framer-motion'
import { PlusCircle, Trash2 } from 'lucide-react'
import { 
  Briefcase, 
  Code, 
  PenTool, 
  Camera, 
  Music, 
  Book, 
  Heart, 
  Scissors, 
  Coffee,
  Wrench,
  Globe,
  MessageCircle
} from 'lucide-react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const profileSchema = z.object({
  full_name: z.string().min(2).max(50),
  title: z.string().optional(),
  bio: z.string().optional(),
})


type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
}

type IconOption = {
  icon: React.ElementType;
  label: string;
}

const iconOptions: IconOption[] = [
  { icon: Briefcase, label: 'Business' },
  { icon: Code, label: 'Programming' },
  { icon: PenTool, label: 'Design' },
  { icon: Camera, label: 'Photography' },
  { icon: Music, label: 'Music' },
  { icon: Book, label: 'Education' },
  { icon: Heart, label: 'Health' },
  { icon: Scissors, label: 'Fashion' },
  { icon: Coffee, label: 'Food & Drink' },
  { icon: Wrench, label: 'Repair' },
  { icon: Globe, label: 'Travel' },
  { icon: MessageCircle, label: 'Consulting' }
]

type Social = {
  platform: string;
  url: string;
}

type MiscSection = {
  type: 'text' | 'list';
  content: string | string[];
}

const CustomizePageComponent: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [newService, setNewService] = useState<Service>({ title: '', description: '', icon: Briefcase })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddService = () => {
    setServices([...services, newService])
    setNewService({ title: '', description: '', icon: Briefcase })
    setIsDialogOpen(false)
  }

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index))
  }

  const [socials, setSocials] = useState<Social[]>([])
  const [newSocial, setNewSocial] = useState<Social>({ platform: '', url: '' })
  /* const [miscSection, setMiscSection] = useState<MiscSection>({ type: 'text', content: '' }) */

  const handleAddSocial = () => {
    setSocials([...socials, newSocial])
    setNewSocial({ platform: '', url: '' })
  }

  const handleRemoveSocial = (index: number) => {
    setSocials(socials.filter((_, i) => i !== index))
  }

  const socialPlatforms = [
    'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'GitHub', 'YouTube', 'TikTok', 'Pinterest', 'Snapchat'
  ]


  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: "",
      title: "",
      bio:"",
    },
  })

  function profileFormSubmit(values: z.infer<typeof profileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div className="container mx-auto py-10">
      <Card className='w-full max-w-2xl mx-auto border-0 shadow-none'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Customize Your Profile Page</CardTitle>
          <CardDescription>Manage your page information </CardDescription>
        </CardHeader>
        <CardContent>
      <Tabs defaultValue="theme" >
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <TabsList>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="theme">
          <Card > 
            <CardHeader>
              <CardTitle>Select Theme</CardTitle>
              <CardDescription>Choose the theme for your profile page</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="default">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="default" />
                  <Label htmlFor="default">Default Theme</Label>
                </div>
                {/* Add more themes here in the future */}
              </RadioGroup>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <Form {...profileForm}>
              <form onSubmit={profileForm.handleSubmit(profileFormSubmit)} >
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <FormField
                     control={profileForm.control}
                     name="full_name"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Name</FormLabel>
                         <FormControl>
                         <Input id="name" placeholder="Your Name" {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                  <FormField
                     control={profileForm.control}
                     name="title"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Professional Title</FormLabel>
                         <FormControl>
                           <Input id="title" placeholder="e.g. Certified Personal Trainer" {...field}/>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                  <FormField
                     control={profileForm.control}
                     name="bio"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Bio</FormLabel>
                         <FormControl>
                          <Textarea id="bio" placeholder="Write a brief description about yourself..." {...field}/>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
            </CardContent>
            <CardFooter className='flex justify-end'>
              <Button type='submit'>Confirm</Button>
            </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
      <CardHeader>
        <CardTitle>Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md">
              {React.createElement(service.icon, { className: "w-5 h-5" })}
              <span className="flex-grow">{service.title}</span>
              <Button variant="destructive" size="icon" onClick={() => handleRemoveService(index)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button><PlusCircle className="w-4 h-4 mr-2" /> Add Service</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceTitle">Service Title</Label>
                  <Input 
                    id="serviceTitle" 
                    value={newService.title}
                    onChange={(e) => setNewService({...newService, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceDescription">Description</Label>
                  <Textarea 
                    id="serviceDescription"
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Icon</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {iconOptions.map((option) => (
                      <Button
                        key={option.label}
                        variant={newService.icon === option.icon ? "default" : "outline"}
                        className="flex flex-col items-center p-2"
                        onClick={() => setNewService({...newService, icon: option.icon})}
                      >
                        {React.createElement(option.icon, { className: "w-6 h-6 mb-1" })}
                        <span className="text-xs">{option.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddService}>Add Service</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socials.map((social, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{social.platform}</span>
                    <span>{social.url}</span>
                    <Button variant="destructive" size="icon" onClick={() => handleRemoveSocial(index)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button><PlusCircle className="w-4 h-4 mr-2" /> Add Social Link</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Social Link</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="socialPlatform">Platform</Label>
                        <Select onValueChange={(value) => setNewSocial({...newSocial, platform: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a platform" />
                          </SelectTrigger>
                          <SelectContent>
                            {socialPlatforms.map((platform) => (
                              <SelectItem key={platform} value={platform}>
                                {platform}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="socialUrl">URL</Label>
                        <Input 
                          id="socialUrl"
                          value={newSocial.url}
                          onChange={(e) => setNewSocial({...newSocial, url: e.target.value})}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddSocial}>Add Social Link</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="misc">
          <Card>
            <CardHeader>
              <CardTitle>Miscellaneous Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Section Type</Label>
                <RadioGroup 
                  value={miscSection.type} 
                  onValueChange={(value: 'text' | 'list') => setMiscSection({...miscSection, type: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text">Text</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="list" id="list" />
                    <Label htmlFor="list">List</Label>
                  </div>
                </RadioGroup>
              </div>
              {miscSection.type === 'text' ? (
                <div className="space-y-2">
                  <Label htmlFor="miscText">Content</Label>
                  <Textarea 
                    id="miscText"
                    value={miscSection.content as string}
                    onChange={(e) => setMiscSection({...miscSection, content: e.target.value})}
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="miscList">List Items (one per line)</Label>
                  <Textarea 
                    id="miscList"
                    value={(miscSection.content as string[]).join('\n')}
                    onChange={(e) => setMiscSection({...miscSection, content: e.target.value.split('\n')})}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent> */}
        </motion.div>
      </Tabs>
      </CardContent>
    </motion.div>
    </Card>
    </div>
  )
}

export default CustomizePageComponent
