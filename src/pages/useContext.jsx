import { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
    const [profileMissions, setProfileMissions] = useState([]);
    const applyToMission = (mission) => {
        if (!profileMissions.find((m) => m.id === mission.id)) {
          setProfileMissions([...profileMissions, mission]);

        }

      };
      return (
        <UserContext.Provider value={{ profileMissions, applyToMission }}>
          {children}
        </UserContext.Provider>
      );
    }
  