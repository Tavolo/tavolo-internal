/**
 * Weekly Metrics Report Generator
 *
 * Generates a summary report of key metrics for team standup.
 * Run every Monday morning before standup.
 */

import { format, subDays } from 'date-fns';

interface WeeklyMetrics {
  totalReservations: number;
  newGuests: number;
  crossLocationVisits: number;
  topLocation: string;
  noShowRate: number;
}

async function generateReport(): Promise<void> {
  const endDate = new Date();
  const startDate = subDays(endDate, 7);

  console.log(`Generating report for ${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d, yyyy')}`);
  console.log('---');

  const metrics = await fetchMetrics(startDate, endDate);

  console.log(`Total Reservations: ${metrics.totalReservations}`);
  console.log(`New Guests: ${metrics.newGuests}`);
  console.log(`Cross-Location Visits: ${metrics.crossLocationVisits}`);
  console.log(`Top Location: ${metrics.topLocation}`);
  console.log(`No-Show Rate: ${(metrics.noShowRate * 100).toFixed(1)}%`);
}

async function fetchMetrics(startDate: Date, endDate: Date): Promise<WeeklyMetrics> {
  const response = await fetch(
    `${process.env.TAVOLO_API_URL}/api/admin/metrics?start=${startDate.toISOString()}&end=${endDate.toISOString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TAVOLO_API_KEY}`,
      },
    }
  );

  return response.json();
}

generateReport().catch(console.error);
