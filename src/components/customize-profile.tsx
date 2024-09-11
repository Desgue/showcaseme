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
import { Briefcase, PlusCircle, Trash2 } from 'lucide-react'

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
import { updateProfileSchema } from '~/lib/types/profiles'
import { updateProfileAction } from '~/actions/data-mutation/profiles'
import {  IconLabel, Service, createServiceSchema, iconOptions } from '~/lib/types/services'
import { createServiceAction, deleteServiceAction } from '~/actions/data-mutation/services'




type Social = {
  platform: string;
  url: string;
}

type MiscSection = {
  type: 'text' | 'list';
  content: string | string[];
}
const socialPlatforms = [
  'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'GitHub', 'YouTube', 'TikTok', 'Pinterest', 'Snapchat'
]

type CustomizePageProps = {
  profile: {
    full_name: string
    title: string
    bio: string
  }
  services: Service[]
}

const CustomizePageComponent: React.FC<{props: CustomizePageProps}> = ({props}) => {
  const [services, setServices] = useState<Service[]>(props.services)
  const [newService, setNewService] = useState<Service>({id:0, title: '', description: '',details: "", icon: "Briefcase" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const handleAddService = () => {
    setServices([...services, newService])
    setNewService({id:0, title: '', description: '', details: "",icon: "Briefcase" })
    setIsDialogOpen(false)
  }

  const handleRemoveService = (index: number, id: number) => {
    setServices(services.filter((_, i) => i !== index))
    deleteServiceAction(id).catch(e => console.error(e))
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


  const profileForm = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      full_name: props.profile.full_name,
      title: props.profile.title,
      bio: props.profile.bio,
    },
  })

  function profileFormSubmit(values: z.infer<typeof updateProfileSchema>) {
    updateProfileAction(values).catch(e=>console.error(e))
  }

  const servicesForm = useForm<z.infer<typeof createServiceSchema>>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      details: "",
    },
  })

  function ServicesFormSubmit(values: z.infer<typeof createServiceSchema> ){
    console.log("ss")
    handleAddService()
    createServiceAction(values).catch(e=>console.error(e))
  }


  return (
    <div className="container mx-auto py-10 max-w-2xl">
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
                          <Textarea className='h-52' id="bio" placeholder="Write a brief description about yourself..." {...field}/>
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
              {service.icon && React.createElement(iconOptions[service.icon], { className: "w-5 h-5" })}
              <span className="flex-grow">{service.title}</span>
              <Button variant="destructive" size="icon" onClick={() => handleRemoveService(index, service.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button><PlusCircle className="w-4 h-4 mr-2" /> Add Service</Button>
            </DialogTrigger>
            <DialogContent>
              <Form {...servicesForm}>
                <form className="flex flex-col gap-4" onSubmit={servicesForm.handleSubmit(ServicesFormSubmit)}>

                  <DialogHeader>
                    <DialogTitle>Add New Service</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col gap-4">
                  <FormField
                     control={servicesForm.control}
                     name="title"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Service Title</FormLabel>
                         <FormControl>
                         <Input id="serviceTitle" placeholder="Add the service title..." {...field} onChange={(e) => {field.onChange(e.target.value); setNewService({...newService, title: e.target.value})}}  />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                    <FormField
                     control={servicesForm.control}
                     name="description"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Brief Description</FormLabel>
                         <FormControl>
                          <Input 
                            id="description" 
                            placeholder="Write a brief description about the service..." {...field} 
                            onChange={(e) =>{ field.onChange(e.target.value);  setNewService({...newService, description: e.target.value})}}/>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                    <FormField
                     control={servicesForm.control}
                     name="details"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Details</FormLabel>
                         <FormControl>
                          <Textarea 
                            className='h-32' 
                            id="details" 
                            placeholder="Write a detailed description about the service..." {...field} 
                            onChange={(e) =>{ field.onChange(e.target.value);  setNewService({...newService, details: e.target.value})}}/>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                    <FormField
                      control={servicesForm.control}
                      name="icon_label"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Icon</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-3 gap-2">
                              {Object.entries(iconOptions).map(([label, Icon]) => (
                                <Button
                                  key={label}
                                  type="button"
                                  variant={field.value === label ? "default" : "outline"}
                                  className="flex flex-col items-center p-2"
                                  onClick={(e) => {e.preventDefault(); field.onChange(label); setNewService({...newService, icon: label as IconLabel})}}
                                >
                                  <span className="text-xs">{label}</span>
                                </Button>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                  <DialogFooter className='w-full mt-4'>
                    <Button>Add Service</Button>
                  </DialogFooter>
              </form>
            </Form>  
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
