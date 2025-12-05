'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name muss mindestens 2 Zeichen lang sein.',
  }),
  company: z.string().min(2, {
    message: 'Unternehmen muss mindestens 2 Zeichen lang sein.',
  }),
  email: z.string().email({
    message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  }),
  message: z.string().min(10, {
    message: 'Ihre Nachricht muss mindestens 10 Zeichen lang sein.',
  }),
  introCall: z.boolean().default(false).optional(),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
      introCall: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Fake submission
    toast({
      title: 'Nachricht gesendet!',
      description: 'Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Kontakt aufnehmen
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Lassen Sie uns über Ihr nächstes Datenprojekt sprechen.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mb-16 max-w-xl space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ihr Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Max Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unternehmen</FormLabel>
                    <FormControl>
                      <Input placeholder="Muster GmbH" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="max@muster.de" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihr Projekt / Ihre Herausforderung</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="introCall"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Ich möchte einen 30-minütigen Intro-Call buchen
                    </FormLabel>
                    <FormDescription>
                      Wir kontaktieren Sie, um einen Termin zu vereinbaren.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Nachricht senden
            </Button>
          </form>
        </Form>
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-4 text-center text-2xl font-bold tracking-tight">
            Unser Büro
          </h3>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.403565691078!2d9.96752351584618!3d53.55744238002447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f78d6596e19%3A0x1ad6858f6913c348!2sFeldstra%C3%9Fe%2038%2C%2020357%20Hamburg!5e0!3m2!1sde!2sde!4v1721303883656!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kartenansicht des RAUM5 Büros"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
