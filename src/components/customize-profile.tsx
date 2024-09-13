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
import { motion } from 'framer-motion'
import { PlusCircle, Trash2 } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { UserProfile, updateProfileSchema } from '~/lib/types/profiles'
import { updateProfileAction } from '~/actions/data-mutation/profiles'
import { IconLabel, Service, createServiceSchema, iconOptions } from '~/lib/types/services'
import { createServiceAction, deleteServiceAction } from '~/actions/data-mutation/services'
import { useToast } from '~/hooks/use-toast'
import { SocialPlatforms, UserSocialMedias, createSocialSchema } from '~/lib/types/socials'
import { createUserSocial } from '~/actions/data-mutation/socials'
import Icon from './ui/lucide-icons'

type MiscSection = {
  type: 'text' | 'list';
  content: string | string[];
}

type CustomizePageProps = {
  profile: Exclude<UserProfile, "id">
  services: Service[]
  socialPlatforms: SocialPlatforms[]
  userSocials: UserSocialMedias[]
}

const CustomizePageComponent: React.FC<{props: CustomizePageProps}> = ({props}) => {
  const {toast} = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [services, setServices] = useState<Service[]>(props.services)
  const [newService, setNewService] = useState<Service>({id:0, title: '', description: '',details: "", icon: "Briefcase" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [socials, setSocials] = useState<UserSocialMedias[]>(props.userSocials)
  const [newSocial, setNewSocial] = useState<UserSocialMedias>()

  const handleAddService = () => {
    setServices([...services, newService])
    setNewService({id:0, title: '', description: '', details: "",icon: "Briefcase" })
    setIsDialogOpen(false)
  }

  const handleRemoveService = (index: number, id: number) => {
    setServices(services.filter((_, i) => i !== index))
    deleteServiceAction(id).catch(e => console.error(e))
  }

  const handleRemoveSocial = (index: number) => {
    setSocials(socials.filter((_, i) => i !== index))
  }

  const socialsForm = useForm<z.infer<typeof createSocialSchema>>({
    resolver: zodResolver(createSocialSchema),
  })

  const profileForm = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      full_name: props.profile.full_name,
      title: props.profile.title,
      bio: props.profile.bio,
    },
  })

  const servicesForm = useForm<z.infer<typeof createServiceSchema>>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      details: "",
    },
  })

  async function socialFormSubmit(values: z.infer<typeof createSocialSchema>) {
    setIsLoading(true)
    try {
      setSocials([...socials, newSocial!])
      setNewSocial(undefined)
      const response = await createUserSocial(values)
      if (response.message === "success"){
        setIsLoading(false)
        toast({
          title: "Socials updated",
          description: "Your account social media information have been updated successfully.",
        })
      } else {
        console.error("Failed to update social media: ", response.message);
        toast({
          title: "Uh oh! Something went wrong :(",
          description: "Please try again shortly",
        })   
      }
    } catch (e) {
      console.error("Failed to update profile: ", e);
      toast({
        title: "Uh oh! Something went wrong :(",
        description: "Please try again shortly",
      })   
    }
  }

  async function profileFormSubmit(values: z.infer<typeof updateProfileSchema>) {
    setIsLoading(true)
    try {

      const response = await updateProfileAction(values)
      if (response.message === "success"){
        setIsLoading(false)
        toast({
          title: "Profile updated",
          description: "Your account profile information have been updated successfully.",
        })
      } else {
        console.error("Failed to update profile: ", response.message);
        toast({
          title: "Uh oh! Something went wrong :(",
          description: "Please try again shortly",
        })   
      }
    } catch (e) {
      console.error("Failed to update profile: ", e);
      toast({
        title: "Uh oh! Something went wrong :(",
        description: "Please try again shortly",
      })   
    }
  }

  async function ServicesFormSubmit(values: z.infer<typeof createServiceSchema>) {
    setIsLoading(true)
    try {
      const response = await createServiceAction(values)
      if (response.message === "success"){
        setIsLoading(false)
        toast({
          title: "Profile updated",
          description: "Your service has been created successfully.",
        })
        handleAddService()
      } else {
        console.error("Failed to create service: ", response.message);
        toast({
          title: "Uh oh! Something went wrong :(",
          description: "Please try again shortly",
        })   
      }
    } catch (e) {
      console.error("Failed to create service: ", e);
      toast({
        title: "Uh oh! Something went wrong :(",
        description: "Please try again shortly",
      })   
    }
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
            <Tabs defaultValue="theme">
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
                  <ThemeTab />
                </TabsContent>
                <TabsContent value="profile">
                  <ProfileTab profileForm={profileForm} profileFormSubmit={profileFormSubmit} isLoading={isLoading} />
                </TabsContent>
                <TabsContent value="services">
                  <ServicesTab
                    services={services}
                    newService={newService}
                    setNewService={setNewService}
                    isDialogOpen={isDialogOpen}
                    setIsDialogOpen={setIsDialogOpen}
                    handleAddService={handleAddService}
                    handleRemoveService={handleRemoveService}
                    servicesForm={servicesForm}
                    ServicesFormSubmit={ServicesFormSubmit}
                    isLoading={isLoading}
                  />
                </TabsContent>
                <TabsContent value="social">
                  <SocialTab
                    socials={socials}
                    newSocial={newSocial}
                    setNewSocial={setNewSocial}
                    handleRemoveSocial={handleRemoveSocial}
                    socialsForm={socialsForm}
                    socialFormSubmit={socialFormSubmit}
                    isLoading={isLoading}
                    socialPlatforms={props.socialPlatforms}
                  />
                </TabsContent>
              </motion.div>
            </Tabs>
          </CardContent>
        </motion.div>
      </Card>
    </div>
  )
}

const ThemeTab: React.FC = () => (
  <Card>
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
      </RadioGroup>
    </CardContent>
  </Card>
)

const ProfileTab: React.FC<{
  profileForm: ReturnType<typeof useForm<z.infer<typeof updateProfileSchema>>>
  profileFormSubmit: (values: z.infer<typeof updateProfileSchema>) => Promise<void>
  isLoading: boolean
}> = ({ profileForm, profileFormSubmit, isLoading }) => (
  <Card>
    <Form {...profileForm}>
      <form onSubmit={profileForm.handleSubmit(profileFormSubmit)} encType="multipart/form-data">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex gap-4'>

          <FormField
            control={profileForm.control}
            name="avatar"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="banner"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Banner</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            </div>
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
          <Button disabled={isLoading} type='submit'>Confirm</Button>
        </CardFooter>
      </form>
    </Form>
  </Card>
)

const ServicesTab: React.FC<{
  services: Service[]
  newService: Service
  setNewService: React.Dispatch<React.SetStateAction<Service>>
  isDialogOpen: boolean
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleAddService: () => void
  handleRemoveService: (index: number, id: number) => void
  servicesForm: ReturnType<typeof useForm<z.infer<typeof createServiceSchema>>>
  ServicesFormSubmit: (values: z.infer<typeof createServiceSchema>) => Promise<void>
  isLoading: boolean
}> = ({
  services,
  newService,
  setNewService,
  isDialogOpen,
  setIsDialogOpen,
  handleAddService,
  handleRemoveService,
  servicesForm,
  ServicesFormSubmit,
  isLoading
}) => (
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
                  <Button type="submit" disabled={isLoading}> Add Service</Button>
                </DialogFooter>
              </form>
            </Form>  
          </DialogContent>
        </Dialog>
      </div>
    </CardContent>
  </Card>
)

const SocialTab: React.FC<{
  socials: UserSocialMedias[]
  newSocial: UserSocialMedias | undefined
  setNewSocial: React.Dispatch<React.SetStateAction<UserSocialMedias | undefined>>
  handleRemoveSocial: (index: number) => void
  socialsForm: ReturnType<typeof useForm<z.infer<typeof createSocialSchema>>>
  socialFormSubmit: (values: z.infer<typeof createSocialSchema>) => Promise<void>
  isLoading: boolean
  socialPlatforms: SocialPlatforms[]
}> = ({
  socials,
  newSocial,
  setNewSocial,
  handleRemoveSocial,
  socialsForm,
  socialFormSubmit,
  isLoading,
  socialPlatforms
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Social Media Links</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {socials.map((social, index) => (
          <div key={index} className="flex items-center space-x-2 justify-between">
            <div className='flex gap-4'>
              <span><Icon name={social.platform}  className='h-6 w-6'/></span>
              <span className='text-muted-foreground text-md'>{social.url}</span>
            </div>
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
            <Form {...socialsForm} >
              <form onSubmit={socialsForm.handleSubmit(socialFormSubmit)}>
                <DialogHeader>
                  <DialogTitle>Add New Social Link</DialogTitle>
                </DialogHeader>
                <div className='space-y-6'>
                  <FormField
                    control={socialsForm.control}
                    name="social_media_id"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Social Medias</FormLabel>
                        <Select onValueChange={(value) => {field.onChange(value); setNewSocial({...newSocial!, social_media_id:0})}}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Social Media Platform" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {socialPlatforms.map((platform) => (
                              <SelectItem key={platform.id} value={platform.id.toString()} className='w-full' >
                                <div className='flex w-full gap-4'>
                                  <Icon name={platform.name}  className='h-4 w-4'/>
                                  {platform.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={socialsForm.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social Media Url</FormLabel>
                        <FormControl>
                          <Input 
                            id="socialUrl"
                            value={field.value}
                            onChange={(e) => {field.onChange(e); setNewSocial({...newSocial!, url: e.target.value})}}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />                       
                </div>
                <DialogFooter>
                  <Button type="submit" className='w-full'>Add Social Link</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </CardContent>
  </Card>
)

export default CustomizePageComponent