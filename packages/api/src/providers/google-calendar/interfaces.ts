import { GoogleCalendar } from "@repo/google-calendar";
import { GoogleTasks } from "@repo/google-tasks";

export type GoogleCalendarCalendar = GoogleCalendar.Calendars.Calendar;
export type GoogleCalendarCalendarListEntry =
  GoogleCalendar.Users.Me.CalendarListEntry;
export type GoogleCalendarEvent = GoogleCalendar.Calendars.Events.Event;
export type GoogleCalendarEventConferenceData =
  GoogleCalendar.Calendars.Events.Event.ConferenceData;

export type GoogleCalendarEventCreateParams =
  GoogleCalendar.Calendars.Events.EventCreateParams;
export type GoogleCalendarEventUpdateParams =
  GoogleCalendar.Calendars.Events.EventUpdateParams;

export interface GoogleCalendarDate {
  date: string;
}

export interface GoogleCalendarDateTime {
  dateTime: string;
  timeZone?: string;
}

export type AllDayGoogleCalendarEvent = GoogleCalendarEvent & {
  start: GoogleCalendarDate;
  end: GoogleCalendarDate;
};

export type DateTimeGoogleCalendarEvent = GoogleCalendarEvent & {
  start: GoogleCalendarDateTime;
  end: GoogleCalendarDateTime;
};

export type GoogleCalendarEventAttendee = NonNullable<
  GoogleCalendar.Calendars.Events.Event["attendees"]
>[number];
export type GoogleCalendarEventAttendeeResponseStatus =
  | "needsAction"
  | "accepted"
  | "declined"
  | "tentative";

export type GoogleTask = GoogleTasks.Tasks.V1.Lists.Tasks.Task;
export type GoogleTaskUpdateParams =
  GoogleTasks.Tasks.V1.Lists.Tasks.TaskUpdateParams;
export type GoogleTaskCategory = GoogleTasks.Tasks.V1.Users.Me.TaskList;
