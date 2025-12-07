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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      toast({
        title: 'Nachricht gesendet!',
        description: 'Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Die Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut.',
        variant: 'destructive',
      });
    }
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
        {/* --- Kompetenztteam Kontaktinformationen --- */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Sie erreichen unser Kompetenzteam auch direkt:</h3>
          <div>
            <span className="font-medium">Telefon: </span>
            <a href="tel:+4943167937060" className="text-blue-600 hover:underline">+49 431 67937060</a>
            {", "}
            <a href="tel:+4943170551577" className="text-blue-600 hover:underline">70551577</a>
            {", "}
            <a href="tel:+4943172972056" className="text-blue-600 hover:underline">72972056</a>
          </div>
          <div className="text-sm text-muted-foreground mt-1">(Vorwahl Kiel: 0431)</div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-xl space-y-8"
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
      </div>
    </section>
  );
}